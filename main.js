const hapiServer = require('./server');

(async () => {
  const server = await hapiServer();
  await server.start();
  console.log(`Server is listening at ${server.info.uri}`);
})();
