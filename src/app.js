const server = require('./server.js');

const controllers = {};
controllers['/'] = function (request, response) {
    var html = '<html><head><title>Aplikacja Node.js</title></head><body><h1>Strona główna</h1></body></html>';
    response.writeHead(200, {'Content-type': 'text/html; charset=utf-8'});
    response.write(html);
    response.end();
};
controllers['/404'] = function (request, response) {
    var html = '<html><head><title>Aplikacja Node.js</title></head><body><h1>404</h1></body></html>';
    response.writeHead(200, {'Content-type': 'text/html; charset=utf-8'});
    response.write(html);
    response.end();
};
controllers['/about'] = function (request, response) {
    var html = '<html><head><title>Aplikacja Node.js</title></head><body><h1>About</h1></body></html>';
    response.writeHead(200, {'Content-type': 'text/html; charset=utf-8'});
    response.write(html);
    response.end();
};
controllers['/planerWeekly'] = function (request, response) {
    var html = '<html><head><title>Aplikacja Node.js</title></head><body><h1>Weekly planner</h1></body></html>';
    response.writeHead(200, {'Content-type': 'text/html; charset=utf-8'});
    response.write(html);
    response.end();
};


server.serverStart(controllers);