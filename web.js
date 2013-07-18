var express = require('express');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
   var myfile = new buffer(256);
   myfile = fs.readFileSync('index.html'); 
  var output = buffer.toString('utf-8',0,40);
  Response.send(output);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
