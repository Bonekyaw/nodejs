const http = require('http');

const routes = require('./routes');

const server = http.createServer(routes);

server.listen(3000);






// const names = (...args) => args;
// console.log(names(1,2,3));