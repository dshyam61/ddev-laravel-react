const webpack = require('webpack');
const config = require('../config/webpack.prod');

webpack(config, (err, stats) => {
  if (err) {
    console.error(err);
  } else {
    console.log(stats.toString());
  }
});