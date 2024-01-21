const http = require('http');

const server = http.createServer(function(req, res) {
    console.log(req.url);
    console.log(req.method);
}).listen(8080);

/* Listening Event Listener */
server.on('listening', () => {
    console.log('8080포트에서 서버 연결 중...');
})

/* Error Event Listener */
server.on('error', () => {
    console.error(error);
});