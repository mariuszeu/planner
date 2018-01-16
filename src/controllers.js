const templating = require('./templating.js');

function index(request, response) {
    // var html = '<html><head><title>Aplikacja Node.js</title></head><body><h1>Strona główna</h1></body></html>';
    // response.writeHead(200, {'Content-type': 'text/html; charset=utf-8'});
    // response.write(html);
    // response.end();
    templating.render(response, 'views/index.html', {
        pageTitle: 'Planner'
    });
};

function error404(request, response) {
    // var html = '<html><head><title>Aplikacja Node.js</title></head><body><h1>404</h1></body></html>';
    // response.writeHead(200, {'Content-type': 'text/html; charset=utf-8'});
    // response.write(html);
    // response.end();
    templating.render(response, 'views/error404.html', {
        pageTitle: 'Planner'
    });
};

function about(request, response) {
    // var html = '<html><head><title>Aplikacja Node.js</title></head><body><h1>About</h1></body></html>';
    // response.writeHead(200, {'Content-type': 'text/html; charset=utf-8'});
    // response.write(html);
    // response.end();
    templating.render(response, 'views/about.html', {
        pageTitle: 'Planner'
    });
};

function contact(request, response) {


    if(request.method === "POST"){


    }else{
        response.writeHead(301, {'Content-type': 'text/plain'});
        response.end('Only POST method available on this page!');
    }
};

function plannerWeekly(request, response) {
    templating.render(response, 'views/planner-weekly.html', {
        pageTitle: 'Planner'
    });
};

exports.index = index;
exports.error404 = error404;
exports.about = about;
exports.contact = contact;
exports.plannerWeekly = plannerWeekly;