var path = require('path');
var webpack = require('webpack');

module.exports = {
    // devtool: 'eval',  //i dont know what this does
	entry: [
        'webpack-dev-server/client?http://localhost:3000',
		// 'webpack/hot/only-dev-server',
		'webpack/hot/dev-server',
		'./src/index'
	],
	output: {
		path: __dirname + '/dist',
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
				include: path.resolve(__dirname, 'src') 
			},
			{ test: /\.html$/, loader: 'file?name=[name].[ext]' },
			{ test: /\.scss$/, loaders: ['style', 'css', 'sass'] },
			{ test: /\.css$/, loader: 'style-loader!css-loader'	},
			{ 
				test: /\.png$/, 
				loader: 'file?name=images/[name].[ext]',
				include: path.resolve(__dirname, 'src/images')
			},
			{ 
				test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
				loader: 'url-loader?limit=100000',
				exclude: path.resolve(__dirname, 'src')
			}
		]
	}
}