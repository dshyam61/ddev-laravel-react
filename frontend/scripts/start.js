const webpack = require('webpack');
const config = require('../config/webpack.dev');

const HOST = process.env.REACT_APP_API_URL;
const PORT = 3000;

const compiler = webpack(config);
compiler.watch({}, (err, stats) => {
  if (err) {
    console.error('Webpack compilation error:', err);
  } else {
    console.log(`Server started at ${HOST}:${PORT}`);
    console.log(stats.toString());
  }
});