var express = require('express');
var port = 4000
var app = express();

var middleware = {
	requireAuthentication: function (req, res, next) {
		console.log('Private route hit!');
		next();
	},
	logger: function(req,res,next) {
		var date = new Date().toString()
		console.log('Request: ' + date + ' ' + req.method + ' ' + req.originalUrl);
		next();
	}
};

// app.get('/', function (req, res) {
// 	res.send('Hello, Express!');
// });

// application wide middleware
app.use(middleware.logger);

//route-level middleware
app.get('/about/', middleware.requireAuthentication, function (req, res) {
	res.send('About Us');
});

app.use(express.static(__dirname + '/public'));
// console.log(__dirname);

app.listen(port, function () {
	console.log('Express server started on port ' + port);
});