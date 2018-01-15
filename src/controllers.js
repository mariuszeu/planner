function index(request, response) {
    var html = '<html><head><title>Aplikacja Node.js</title></head><body><h1>Strona główna</h1></body></html>';
    response.writeHead(200, {'Content-type': 'text/html; charset=utf-8'});
    response.write(html);
    response.end();
};

function error404(request, response) {
    var html = '<html><head><title>Aplikacja Node.js</title></head><body><h1>404</h1></body></html>';
    response.writeHead(200, {'Content-type': 'text/html; charset=utf-8'});
    response.write(html);
    response.end();
};

function about(request, response) {
    var html = '<html><head><title>Aplikacja Node.js</title></head><body><h1>About</h1></body></html>';
    response.writeHead(200, {'Content-type': 'text/html; charset=utf-8'});
    response.write(html);
    response.end();
};

function plannerWeekly(request, response) {
    var html = '<html><head><title>Aplikacja Node.js</title></head><body><h1>Weekly planner</h1></body></html>';
    response.writeHead(200, {'Content-type': 'text/html; charset=utf-8'});
    response.write(html);
    response.end();
};

exports.index = index;
exports.error404 = error404;
exports.about = about;
exports.plannerWeekly = plannerWeekly;