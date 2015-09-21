	
	var express = require('express');
	var app = express();
	
	app.use('/', function(req, res) {
		res.send('Hello Motherbase<br><br><em>Welcome back Boss</em>');
	});
	
	app.listen(8000);
	console.log('Server running at http://localhost:8000/');
	
	module.exports = app;