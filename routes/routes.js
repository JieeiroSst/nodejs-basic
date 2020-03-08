const http = require('http');

var routes = {
    '/': function index(w, r) {
        r.writeHead(200);
        r.end('hello world');
    },
    '/foo': function foo(w, r) {
        r.writeHead(200);
        r.end('you are winning foo');
    },
};

http
    .createServer((w, r) => {
        if (w.url in routes) {
            return routes[w.url(w, r)];
        }
    })
    .listen(8083);