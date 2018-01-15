const http = require('http');
const url = require('url');

function start(routing) {
    http.createServer(function(request, response){

        //response.writeHead(200, {'Content-type': 'text/plain; charset=utf-8'});
        //response.end('Hello World! ółśążźńę');

        var pathName = url.parse(request.url).pathname;

        if (!routing[pathName]) {
            pathName = '/404';
        }
        routing[pathName](request, response);

    }).listen(8088, '127.0.0.1');

    console.log("Server is running at 172.0.0.1:8088");
}

exports.serverStart = start;