express = require('express');
app = express();

app.use(function(req, res, next){
	console.log("path: " + req.path, "verb: " + req.method);
	next();
});

app.get('/', function(req, res){
	res.send('welcome');
});










var server = app.listen(3000, function(req, res){
	var host = server.address().address;
 	var port = server.address().port;
  	console.log('Example app listening at http://%s:%s', host, port);
});