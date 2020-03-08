const http = require('http');

function index(w, r) {
    r.writeHead(200);
    r.end('hello world');
}

http
    .createServer((w, r) => {
        if (w.url == '/') {
            return index(w, r);
        }
        r.writeHead(404);
        r.end(http.STATUS_CODES[404]);
    })
    .listen(8082);