var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/main/resources/static/public');
var APP_DIR = path.resolve(__dirname, 'src/main/resources/static/app');

var config = {
    entry: {
        app: APP_DIR + '/PhoneBook.js'
    },
    devtool: "source-map",
    output: {
        path: BUILD_DIR,
        publicPath: BUILD_DIR,
        filename: 'bundle.min.js'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    resolve: {
        extensions: ["", ".js", ".jsx", ".es6"]
    },
    plugins: [
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify('production')
          }
        }),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.ProvidePlugin({
            _: 'underscore'
        })
    ],
    devServer: {
      port: 7070,
      proxy: {
          '**': {
              target: 'http://localhost:8080',
              secure: false,
              prependPath: false
          }
      },
      publicPath: "http://localhost:7070/public",
      contentBase: "src/main/resources/static/"
  }
};

module.exports = config;
