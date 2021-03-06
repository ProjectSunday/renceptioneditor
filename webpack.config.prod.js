var path 				= require('path');
var webpack 			= require('webpack');
var HtmlWebpackPlugin 	= require('html-webpack-plugin');

var node_modules 	= path.resolve(__dirname, 'node_modules');
var src 			= path.resolve(__dirname, 'src');
var dist 			= path.resolve(__dirname, 'dist');

module.exports = {
	entry: {
		app: [
			'babel-polyfill',
			'./src/index'
		]
	},
	output: {
		path: dist,
        publicPath: '/',
		filename: 'bundle.js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			inject: 'body'
		}),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		})
	],
	module: {
		loaders: [
			{ 
				test: /\.js$/, 
		        loader: "babel-loader",
				exclude: node_modules,
				include: src,
		        query: {
        	  		plugins: [ 'transform-runtime', 'transform-decorators-legacy' ],
          			presets: [ 'es2015', 'stage-0', 'react' ]
        		}
			},
            {
                test: /\.less$/,
                loader: "style!css!less"
            },
			{ 
				test: /\.css$/, 
				loaders: [ 'style', 'css' ] },
			{ 
				test: /\.(png|ico|svg)$/, 
				loader: 'file?name=[name].[ext]',
				exclude: node_modules,
				include: src
			},
			{ 
				test: /\.(woff|woff2|eot|ttf|svg)$/, 
				loader: 'url-loader?limit=100000',
				exclude: src
			}
		]
	}
}