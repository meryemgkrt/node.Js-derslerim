const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(
      `
    <html>
    <head>
    <title>Anasayfa</title>
    <meta charset="UTF-8">
    </head>
<body>
<h1>AnaSayfa</h1>
</body>
    </html>
    `
    );
    res.end();
  } else if (req.url == "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(
      `
      <html>
      <head>
      <title>About</title>
      <meta charset="UTF-8">
      </head>
  <body>
  <h1>About</h1>
  </body>
      </html>
      `
    );
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write(
      `
      <html>
      <head>
      <title>A404</title>
      <meta charset="UTF-8">
      </head>
  <body>
  <h1>404</h1>
  </body>
      </html>
      `
    );
    res.end();
  }
  
});

server.listen(3000);

console.log("Merhaba Node.js");
