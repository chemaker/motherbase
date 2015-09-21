	
	var express = require('express');
	var app = express();
	
	app.use('/', function(req, res) {
		res.send('Hello Motherbase');
	});
	
	app.listen(8000);
	console.log('Server running at http://localhost:3000/');
	
	module.exports = app;