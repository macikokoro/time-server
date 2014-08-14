'use strict'
// Dependencies
var express = require('express');
var http = require('http');

// Dependencies instances
var app = express();
var server = http.createServer(app);

// Routing
var date = new Date;

app.get('/', function(req, res){
  res.send('Time: ' + date);
});

app.get('/:name', function(req, res) {
  res.send({'msg' : 'Yo ' + req.params.name + '!'});
});

//Server configuration
server.listen(3000, function() {
  console.log('server runnig on port 3000');
});
