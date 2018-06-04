const path = require("path");

var OpenBrowserPlugin = require('open-browser-webpack-plugin');
 
module.exports = {
  module: {
    rules: [
      {
        test: /\.s?css$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new OpenBrowserPlugin({ url: 'http://localhost:9001' })
  ]
};