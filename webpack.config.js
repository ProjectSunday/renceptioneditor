var path 				= require('path');
var webpack 			= require('webpack');

var node_modules 	= path.resolve(__dirname, 'node_modules');
var src 			= path.resolve(__dirname, 'src');
var dist 			= path.resolve(__dirname, 'dist');


// var sassLoaders = [
//   'css-loader',
//   'postcss-loader',
//   'sass-loader?indentedSyntax=sass&includePaths[]=' + path.resolve(__dirname, './src')
// ]


module.exports = {
    devtool: 'eval',
	entry: {
		app: [
        	'webpack-dev-server/client?http://localhost:7000',
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
            {
                test: /\.less$/,
                loader: "style!css!less"
            },
			{ test: /\.css$/, loaders: [ 'style', 'css' ] },
			{ 
				test: /\.png$/, 
				loader: 'file?name=[name].[ext]',
				include: src
			},
			{ 
				test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
				loader: 'url-loader?limit=100000',
				exclude: src
			}
		]
	}
}