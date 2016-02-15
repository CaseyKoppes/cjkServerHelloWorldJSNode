var app = require('express').createServer();

app.get('/', function(request, response) 
{
  response.send ("Hello, World! -cjk) ;
});

var port = process.env.PORT || 3000;
app.listen(port, function()
{
	console.log("Listening on " + port);
});