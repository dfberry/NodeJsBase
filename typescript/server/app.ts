import * as express from "express";
import * as path from 'path';


var app = express();

app.use('/public', express.static(__dirname + '/../public'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/../public/default.html'));
});

export var App = app;