import http from "http";
import fs from "fs/promises";
import url from "url";
import path from "path";
const port = process.env.PORT || 3000;

// Get the current file name and directory name
const _fileName = url.fileURLToPath(import.meta.url);
const _dirname = path.dirname(_fileName);

console.log(_fileName, _dirname)

const server = http.createServer(async (req, res) => {
  try {
    if (req.method === "GET") {
      let filePath;
      if (req.url === "/") {
        filePath = path.join(_dirname, "public", "index.html");
      } else if (req.url === "/about") {
        filePath = path.join(_dirname, "public", "about.html");
      } else {
        throw new Error("Page not found");
      }
      const data = await fs.readFile(filePath);
      res.writeHead(200, { "content-type": "text/html" });
      res.write(data);
      res.end()
    } else {
      throw new Error("Method not allowed");
    }
  } catch (error) {
    res.writeHead(500, { "content-type": "text/html" });
    res.end("<h1>Server Error</h1>");
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
