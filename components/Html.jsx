import React from 'react';

const Html = props => (
  <html lang="en">
    <head>
      <title>Walmart Products</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      <link href="https://fonts.googleapis.com/css?family=Lato:300,400" rel="stylesheet" />
      <link href="https://meyerweb.com/eric/tools/css/reset/reset.css" rel="stylesheet" />
      <link href="main.css" type="text/css" rel="stylesheet" />
    </head>
    <body>
      {/* sets markup within root div to child that will be mounted */}
      <div
        id="root"
        dangerouslySetInnerHTML={{ __html: props.children }}
      />
      {/* when script below is run, global prop of window called state
        is set to allow access to products and query */}
      <script
        dangerouslySetInnerHTML={{ __html: props.state }}
      />
      <script src="bundle.js" />
    </body>
  </html>
);

export default Html;
