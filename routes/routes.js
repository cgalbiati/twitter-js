var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');
var fs = require('fs');

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { title: 'Twitter.js', tweets: tweets } );
});

router.get('/users/:name', function(req, res, next) {
	var name = req.params.name;
	var list = tweetBank.find({name: name});
	res.render('index', { title: 'Twitter.js - Posts by '+name, tweets: list} );
});

router.get('/users/:name/tweets/:id', function(req, res, next) {
	var id = req.params.id;

	var name = req.params.name;
	// console.log(tweetBank.list());
	var tweet = tweetBank.find({tweetId: id});
	console.log(tweet);
	res.render('index', { title: 'Twitter.js - Posts by '+name, tweets: tweet });
});

router.use(function(req, res, next){
	var filePath = __dirname + "/public" + req.path;
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
