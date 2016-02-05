var path = require('path');
// var projectPath = path.join(__dirname, './')
module.exports = {
	contentBase: './dist',

	entry: {
		javascript: "./src/index.js",
  		html: "./src/index.html"
	},
	output: {
		path: path.join(__dirname, 'dist'),
        publicPath: '/',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js?$/,
				loaders: [ 'babel-loader' ],
				exclude: [
					path.resolve(__dirname, 'node_modules')
				],
				include: [
					path.resolve(__dirname, 'src')
				]
			},
			{
				test: /\.html$/,
				loaders: [ 'file?name=[name].[ext]' ]
			}
		]
	}
}