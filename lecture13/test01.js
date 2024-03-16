// JavaScript Module [Built-in Module : ECMAScript Module]
// - HTTP Module
// - Create a Simple HTTP Server

import { createServer } from "http";
const port = 3000;

const server = createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(
    "<h1>Hello NodeJS !</h1> <p>This is a simple HTTP Server.</p> <p> ECMAScript Module.</p>"
  );
  res.end();
});

server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
