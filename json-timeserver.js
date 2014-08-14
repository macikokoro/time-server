'use strict'

var express = require('express');
var http = require('http');
var app = express();

var date = new Date;

app.get('/', function(req, res){
  res.send('Time: ' + date);
});

app.get('/:name', function(req, res) {
  res.send({'msg' : 'Yo ' + req.params.name + '!'});
});

app.use(express.static(__dirname + '/static'));

var server = http.createServer(app);

server.listen(3000, function() {
  console.log('server runnig on port 3000');
});
