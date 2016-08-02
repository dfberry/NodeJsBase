"use strict";
var express = require("express");
var path = require('path');
var app = express();
app.use('/public', express.static(__dirname + '/../public'));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/default.html'));
});
exports.App = app;
//# sourceMappingURL=app.js.map