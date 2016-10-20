var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    './src/app.js'
  ],
  module: {
    loaders: [{ 
    	test: /\.jsx?$/,
    	loader: 'babel',
    	exclude: /node_modules/,
	   query: {
					presets: ['es2015', 'react']
				}
		},
	]
  },
  resolve: {
    extensions: ['', '.js']
  },
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};