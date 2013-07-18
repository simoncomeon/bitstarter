var express = require('express');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
   var mybuff = new Buffer(256);
   mybuff = fs.readFileSync('index.html'); 
  var output = mybuff.toString('utf-8',0,40);
  Response.send(output);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
