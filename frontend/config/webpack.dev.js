const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const dotenv = require('dotenv');

dotenv.config();

const HOST = process.env.REACT_APP_API_URL;
module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    hot: true,
    inline: true,
    host: HOST
  },
});