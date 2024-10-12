const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const config = require('../config/webpack.dev');
const apiUrl = process.env.REACT_APP_API_URL;

const server = new webpackDevServer(webpack(config), {
  hot: true,
  historyApiFallback: true,
});

const PORT = 3000;
const HOST = apiUrl;

server.listen(PORT, HOST, (err) => {
  if (err) {
    console.error(err);
    process.exit(1); // Exit with non-zero code
  } else {
    console.log(`Server started at http://${HOST}:${PORT}`);
  }
});