const http = require('http');
const PORT = process.env.PORT || 8000;


onRequest = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello World!');
    res.end();
}

http.createServer(onRequest).listen(PORT);