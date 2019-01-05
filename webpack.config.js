var webpack = require('webpack');
var path = require('path');

module.exports = {
	mode: 'development',

	entry: './src/index.js',

	module: {
		rules: [
			{test: /\.html$/, use: 'underscore-template-loader'},
			{test: /\.css$/, use: ['style-loader', 'css-loader']}
		]
	},

	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname + 'dist')
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
	},

	devServer: {
    contentBase: 'dist',
    compress: true,
    port: 8080
  }
};
