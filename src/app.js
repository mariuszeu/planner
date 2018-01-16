const controllers = require('./controllers.js');
const server = require('./server.js');

var routing = {
    '/': controllers.index,
    '/404': controllers.error404,
    '/about': controllers.about,
    '/contact': controllers.contact,
    '/planner-weekly': controllers.plannerWeekly
};

server.serverStart(routing);