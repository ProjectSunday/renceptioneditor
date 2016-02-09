var path = require('path');
var webpack = require('webpack');
// var projectPath = path.join(__dirname, './')
module.exports = {

	entry: [
        'webpack-dev-server/client?http://0.0.0.0:3000',
		// 'webpack/hot/only-dev-server',
		'webpack/hot/dev-server',
		'./src/index.html',
		'./src/index.js'
	],
	output: {
		path: path.join(__dirname, 'dist'),
        publicPath: '/',
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		loaders: [
			{
				test: /\.js?$/,
				loaders: [ 'react-hot', 'babel-loader' ],
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
			},
			{
		        test: /\.scss$/,
        		loaders: ["style", "css", "sass"]
			}
		]
	}
}