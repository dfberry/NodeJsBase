import * as http from "http"; 
import * as myServer from "./app"; 

var port = 3000;
var server = http.createServer(myServer.App);
server.listen(port, function(){
    console.log("Server listening on port %d", port);
});