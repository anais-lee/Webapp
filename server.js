var http_IP = '127.0.0.1';
var http_port = 8899;
var http = require('http');
var express = require('express');
var HD = require('./controllers/HD_Simulator.jade');
var SD = require('./controllers/SD_Simulator.jade');
var app = express();
var jade = require('jade');
var HDhtml = jade.renderFile('HD', options);
var SDhtml = jade.renderFile('SD', options);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.get('/', function(req, res) {
	res.render('layout', {
		title: 'Home'
	});
});

app.get('/SD_Simulator', function(req, res) {
	res.render('SD_Simulator', {
		title: 'Home'
	});
});

var server = http.createServer(function(req, res) {
  require('./router').get(req, res);
}); //end server

server.listen(http_port, http_IP);
console.log('listening to http://' + http_IP + ":" + http_port);
