/* This is a simple Node.js server that listens on a specified port and responds with "Hello World" to any request. */
// The server is created using the http module and listens on a port defined by the PORT environment variable or defaults to 3000 if not set.
import http from 'http';
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {"content-type":"text/html"})
  res.write('<body>')
  res.write('<h1>Hello World!</h1>')
  res.end('</body>')
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});