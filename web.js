var express = require('express');

var myfile = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  buffy = myfile.readFileSync('index.html');
  response.send(buffy.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
