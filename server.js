var express = require('express');
var port = 4000;
var app = express();

//require middleware = require()
var middleware = require('./middleware.js')

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