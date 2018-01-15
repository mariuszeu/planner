const http = require('http');

function start() {
    http.createServer(function(request, response){

        response.writeHead(200, {'Content-type': 'text/plain; charset=utf-8'});
        response.end('Hello World! ółśążźńę');

    }).listen(8088, '127.0.0.1');

    console.log("Server is running at 172.0.0.1:8088");
}

exports.serverStart = start;