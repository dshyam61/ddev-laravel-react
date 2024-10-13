const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const dotenv = require('dotenv');

dotenv.config();

const HOST = process.env.REACT_APP_API_URL;

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    static: './build',
    hot: true,
    inline: true,
    host: HOST,
    port: 3000,
    headers: {
    'Cache-Control': 'no-cache',
      'Expires': '-1'
    },
    watchOptions: {
      aggregateTimeout: 300,
      poll: true,
      ignored: /node_modules/
    },
    client: {
      logging: 'error',
      overlay: true
    },
    historyApiFallback: true
  }
});