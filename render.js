var swig = require('swig');
var fs = require('fs');

var indexObj = {
	title: 'An Example', 
	people: [
		{name: 'Gandolf'}, 
		{name: 'Frodo'}, 
		{name: 'Hermione'}
	]
};

swig.renderFile('./views/index.html', indexObj,
		function(err, output) {
		if (err) throw 'error';
		console.log(output);
	});

