import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ children, state }) => (
  <html lang="en">
    <head>
      <title>Walmart Products</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      <link href="https://fonts.googleapis.com/css?family=Lato:300,400" rel="stylesheet" />
      <link href="https://meyerweb.com/eric/tools/css/reset/reset.css" rel="stylesheet" />
      <link href="main.css" type="text/css" rel="stylesheet" />
      <link rel="icon" type="image/png" sizes="16x16" href="favicon.ico" />
    </head>
    <body>
      {/* sets markup within root div to child that will be mounted */}
      <div
        id="root"
        dangerouslySetInnerHTML={{ __html: children }}
      />
      {/* when script below is run, global prop of window called state
        is set to allow access to products and query */}
      <script
        dangerouslySetInnerHTML={{ __html: state }}
      />
      <script src="bundle.js" />
    </body>
  </html>
);

Layout.propTypes = {
  children: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
};

export default Layout;
