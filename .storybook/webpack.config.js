const path = require("path");

var OpenBrowserPlugin = require('open-browser-webpack-plugin');
 
module.exports = {
  module: {
    rules: [
      {
        test: /\.s?css$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(woff(2)?|ttf|jpg|png|eot|gif|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: 'fonts/'
            }
        }]
      }
    ]
  },
  plugins: [
    new OpenBrowserPlugin({ url: 'http://localhost:9001' })
  ],
};