const http  = require('http');
const fs    = require('fs');
const index = fs.readFileSync('app/index.html');

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type':'text/plain'});
  res.end(index);
}).listen(3000);
