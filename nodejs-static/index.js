"use strict";

//module dependencies.
var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();

// location of config settings
var config = require('./config.json');

if (!config || !config.port) {
  console.log("config file error");
  return;
}

// root request 
if(config.default){
  var pathToFile = path.join(__dirname + config.default);
  console.log(pathToFile);

  fs.stat(pathToFile, function(err, stat){
    if (err == null){
      app.get('/', function(req, res) {
        res.sendFile(pathToFile);
      });
    }
  });
}

// location of static files
app.use(express.static('./public'));

// remove expressjs from response
app.disable('x-powered-by');

// begin listening
app.listen(config.port, function () {
  console.log('Static sesrver listening on port ' + config.port);
});