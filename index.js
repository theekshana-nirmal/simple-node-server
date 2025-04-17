/* This is a simple Node.js server that listens on a specified port and responds with "Hello World" to any request. */
// The server is created using the http module and listens on a port defined by the PORT environment variable or defaults to 3000 if not set.
import http from "http";
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end("<h1>Home Page</h1>");
  } else if (req.url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end("<h1>About Page</h1>");
  } else if (req.url === "/contact") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end("<h1>Contact Us Page</h1>");
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.end("<h1>Page not found!</h1>");
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
