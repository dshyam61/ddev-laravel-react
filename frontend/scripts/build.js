const webpack = require('webpack');
const config = require('../config/webpack.prod');

try {
  webpack(config, (err, stats) => {
    if (err) {
      console.error('Webpack compilation error:', err);
    } else {
      console.log(stats.toString());
    }
  });
} catch (error) {
  console.error('Error running Webpack:', error);
}