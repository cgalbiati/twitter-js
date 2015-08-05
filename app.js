//require variables
var express = require('express');
var app = express();
var swig = require('swig');
var routes = require('./routes');
//var fs = require('fs');
//var greeter = require('./greeter');

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

swig.setDefaults({ cache: false });






app.use(routes);








//server
var server = app.listen(3000, function(req, res){
	var host = server.address().address;
 	var port = server.address().port;
  	console.log('Example app listening at http://%s:%s', host, port);
});