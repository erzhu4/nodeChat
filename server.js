var express = require('express');
var app = express();
var server = require('http').createServer(app);
var socketIo = require('socket.io');

const absoluteDir = "/var/www/node";

const JSON = require('circular-json');

app.use(express.static('public'));

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$


app.get('/', function(req, res) {
  	res.sendFile(absoluteDir + '/html/home.html');
});

app.get('/chess', function(req, res) {
  	res.sendFile(absoluteDir + '/html/chessGame.html');
});

app.get('/test', function(req, res) {
	res.sendFile(absoluteDir + '/html/test.html');
});


// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

var io = socketIo.listen(server);

io.sockets.on('connection', function(socket){

	socket.on("derp", (data) => {
		io.sockets.emit("heard", {data: "test"});
	});

	socket.on("mainchatSubmit", (data) => {
		io.sockets.emit("mainchatEmit", data);
	});

	socket.on("disconnect", function(data){
		
	});

});

server.listen(80, function() {
  	console.log('Example app listening on port 1000!');
});