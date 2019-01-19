const path = require('path');

module.exports = {
  entry: path.join(__dirname, './client.js'),
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname),
    filename: './assets/bundle.js',
  },
  module: {
    rules: [{
      test: /\.jsx$/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'env'],
      },
    }],
  },
};
