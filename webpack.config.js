var path 		= require('path');
var webpack 	= require('webpack');

var node_modules 	= path.resolve(__dirname, 'node_modules');
var src 			= path.resolve(__dirname, 'src');
var dist 			= path.resolve(__dirname, 'dist');

module.exports = {
    devtool: 'eval',
	entry: {
		app: [
        	'webpack-dev-server/client?http://localhost:3000',
			'webpack/hot/dev-server',
			'./src/index'
		]
	},
	output: {
		path: dist,
        publicPath: '/',
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		loaders: [
			{ 
				test: /\.js$/, 
				loaders: [ 'react-hot', 'babel-loader' ],
				exclude: node_modules,
				include: src 
			},
			{ test: /\.html$/, loader: 'file?name=[name].[ext]' },
			{ test: /\.scss$/, loaders: ['style', 'css', 'sass'] },
			{ test: /\.css$/, loader: 'style-loader!css-loader'	},
			{ 
				test: /\.png$/, 
				loader: 'file?name=images/[name].[ext]',
				include: src + '/images'
			},
			{ 
				test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
				loader: 'url-loader?limit=100000',
				exclude: src
			}
		]
	}
}