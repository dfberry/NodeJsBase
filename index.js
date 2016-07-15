'use strict';

var app = require(__dirname + '/server/server')(true);
    //, wagner = require('wagner-core');
    
    //require(__dirname + '/server/dependencies')(wagner);
    
var logging = true
    , https = require('https')
    , http = require('http')
    , sslOptions;// = wagner.get('sslOptions');

var port = process.env.TOPMAIL_PORT || 3000;
var host = process.env.TOPMAIL_HOST || undefined;
var server; 

if (sslOptions) {
  server = https.createServer(sslOptions, app);
}else{
  server = http.createServer(app);
}

server.listen(port, host, function() {
    console.log("listening on port " + port);
});