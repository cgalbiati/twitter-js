//require variables
express = require('express');
app = express();
swig = require('swig');

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

swig.setDefaults({ cache: false });






//router functions

//routs everything
app.use(function(req, res, next){
	console.log("path: " + req.path, "verb: " + req.method);
	next();
});

//routes home page requests
app.get('/', function(req, res){
	var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
	res.render( 'index', {title: 'Hall of Fame', people: people} );
	//res.send('welcome');
});




app.get('/test', function(req, res){
	res.send('test page');
});








//server
var server = app.listen(3000, function(req, res){
	var host = server.address().address;
 	var port = server.address().port;
  	console.log('Example app listening at http://%s:%s', host, port);
});