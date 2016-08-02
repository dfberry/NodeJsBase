"use strict";
var http = require("http");
var myServer = require("./app");
var port = 3000;
var server = http.createServer(myServer.App);
server.listen(port, function () {
    console.log("Server listening on port %d", port);
});
//# sourceMappingURL=index.js.map