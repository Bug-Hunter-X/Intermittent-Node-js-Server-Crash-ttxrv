const http = require('http');

const server = http.createServer((req, res) => {
  // This is where the bug is
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});