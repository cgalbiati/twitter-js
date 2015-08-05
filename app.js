express = require('express');
app = express();

app.get('/', function(req, res){
	res.send('welcome');
})











app.listen(3000, function(req, res){
	console.log('server listening');
});