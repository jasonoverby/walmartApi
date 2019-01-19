const path = require('path');

module.exports = {
  entry: path.join(__dirname, './client.js'),
  mode: 'development',
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
        presets: [
          '@babel/preset-react',
          '@babel/preset-env',
        ],
      },
    }],
  },
};
