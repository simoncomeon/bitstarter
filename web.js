var express = require('express');
var fs =require('fs');
var htmlFile = "try.html";

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
 var html =fs.readFileSync(htmlFile).toString();
 //  var mybuff = new Buffer("index","utf-8");
 //  mybuff = fs.readFileSync('index.html'); 
//  var output = mybuff.toString('utf-8');
  response.send(html);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
