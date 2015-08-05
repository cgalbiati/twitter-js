//require variables
express = require('express');
app = express();
swig = require('swig');

app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + '/views');







//router functions

//routs everything
app.use(function(req, res, next){
	console.log("path: " + req.path, "verb: " + req.method);
	next();
});

//routes home page requests
app.get('/', function(req, res){
	res.send('welcome');
});


var indexObj = {
	title: 'An Example', 
	people: [
		{name: 'Gandolf'}, 
		{name: 'Frodo'}, 
		{name: 'Hermione'},
	]
}

app.get('/test', function(req, res){
	swig.renderFile('./views/index.html', indexObj
	, function(err, output) {
		if (err) throw err;
		console.log('first' + output + 'hi');
		console.log(typeof(output));
		res.send(output)
	});

});








//server
var server = app.listen(3000, function(req, res){
	var host = server.address().address;
 	var port = server.address().port;
  	console.log('Example app listening at http://%s:%s', host, port);
});