const hapi = require('hapi');
const vision = require('vision');
const inert = require('inert');
const hapiReactViews = require('hapi-react-views');

const path = require('path');

const {
  getMatchingProducts,
} = require('./lib/getMatchingProducts');

require('@babel/register')({
  presets: [
    '@babel/preset-react',
    '@babel/preset-env',
  ],
});

const hapiServer = async () => {
  // server at http://localhost:8000
  const server = hapi.server({
    host: 'localhost',
    port: 8000,
    routes: {
      // routes requests for static files through assets dir
      files: {
        relativeTo: path.join(__dirname, 'assets'),
      },
    },
  });

  // hapi plugins for views
  await server.register([inert, vision]);

  // template options
  server.views({
    engines: {
      jsx: hapiReactViews,
    },
    relativeTo: __dirname,
    path: 'components',
    compileOptions: {
      // preserves the data-react-id attribute to allow for client-side
      // re-rendering
      renderMethod: 'renderToString',
      layoutPath: path.join(__dirname, 'components'),
      layout: 'Layout',
    },
  });

  // webpack bundled js
  server.route({
    method: 'GET',
    path: '/bundle.js',
    // uses inert plugin for static file
    handler: {
      file: 'bundle.js',
    },
  });

  // favicon
  server.route({
    method: 'GET',
    path: '/favicon.ico',
    // uses inert plugin for static file
    handler: {
      file: 'favicon.ico',
    },
  });

  // css file
  server.route({
    method: 'GET',
    path: '/main.css',
    // uses inert plugin for static file
    handler: {
      file: 'main.css',
    },
  });

  // root path
  server.route({
    method: 'GET',
    path: '/',
    handler: async (request, h) => {
      const context = {
        isResultsPage: false,
      };

      // sets string to be written to script in html component
      context.state = `window.state = ${JSON.stringify(context)};`;

      return h.view('App', context);
    },
  });

  // route to handle request to any category
  server.route({
    method: 'GET',
    path: '/{category}',
    handler: async (request, h) => {
      // guard against injection attacks
      const category = encodeURIComponent(request.params.category);
      let matchingProducts;
      try {
        matchingProducts = await getMatchingProducts(category);
      } catch (err) {
        if (err.response.status === 403) {
          server.stop();
          return '<h1>Apologies, but this account is over the rate limit.</h1>';
        }
      }

      const context = {
        query: category,
        products: matchingProducts,
        isResultsPage: true,
      };

      // sets string to be written to script in html component
      context.state = `window.state = ${JSON.stringify(context)};`;
      return h.view('App', context);
    },
  });

  return server;
};

module.exports = hapiServer;
