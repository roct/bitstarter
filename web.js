var express = require('express');

var myfile = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  app.use(express.static(__dirname + '/img'));
  app.use(express.static(__dirname + '/css'));
  buffy = myfile.readFileSync('index.html');
  response.send(buffy.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
