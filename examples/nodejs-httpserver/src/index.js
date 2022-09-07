const http = require('http');

const port = process.env.PORT || 3000;

const requestListener = function (_, res) {
  res.writeHead(200);
  res.end('Welcome from Gite');
}

const server = http.createServer(requestListener);
server.listen(port);
console.log(`Example app listening at http://localhost:${port}`);
