var webpack = require('webpack');

module.exports = {
	mode: 'development',

	entry: './app/driver.js',

	externals: {
		'jquery' : '$'
	},

	module: {
		rules: [
			{
				test: /\.html$/,
				use: 'underscore-template-loader'
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},

	output: {
		path: __dirname + '/static/js',
		filename: 'bundle.js'
	},

	plugins: [
		new webpack.ProvidePlugin({
			_: 'underscore'
		})
	],

	resolve: {
	    modules: [__dirname + '/node_modules', __dirname + '/app']
	},

  	resolveLoader: {
    	modules: [__dirname + '/node_modules']
  	}
};