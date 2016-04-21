// var webpack = require('webpack');
// var webpackDevServer = require('webpack-dev-server');
// var config = require('./webpack.config');

var port = process.env.PORT || 7000;



// new webpackDevServer(webpack(config), {
// 	hot: true,
//     publicPath: config.output.publicPath,
// }).listen(port, 'localhost', function (err, result) {
// 	if (err) {
// 		console.log(err);
// 	}
//   	console.log('Listening at localhost:' + port);
//   	console.log('Building.  Just one moment...');
// });



var express         = require('express');
var app = express();

// require('./globals.js');  //must be first

app.use('/', express.static(__dirname + '/dist'));

app.listen(port, function () {
    console.log('Server online. Port:', port);
});