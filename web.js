var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.logger());

message = fs.readFileSync('index.html').toString('utf-8');

app.get('/', function(request, response) {
  response.send(message);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
