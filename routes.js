var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('./tweetBank');
var fs = require('fs');

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { title: 'Twitter.js', tweets: tweets } );
});

router.use(function(req, res, next){
	var filePath = __dirname + "/public" + req.path;
	console.log(filePath);
	fs.readFile(filePath, function(err, data){
		if(err) next(err);
		else res.send(data.toString());
	});

});

router.use(function(error, req, res, next){
	res.send("error");
});

module.exports = router;

// app.use(function(req, res, next){
// 	console.log("path: " + req.path, "verb: " + req.method);
// 	next();
// });

// //routes home page requests
// app.get('/', function(req, res){
// 	var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
// 	res.render( 'index', {title: 'Hall of Fame', people: people} );
// 	//res.send('welcome');
// });
