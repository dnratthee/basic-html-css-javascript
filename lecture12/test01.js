// JavaScript Module [Built-in Module]
// - HTTP Module
// - Create a Simple HTTP Server

const { createServer } = require("http");

const server = createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h1>Hello NodeJS !</h1> <p>This is a simple HTTP Server.</p>");
  res.end();
});

server.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
