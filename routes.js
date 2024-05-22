const fs = require("fs");

const routeHandler = (req, res) => {
  if (req.url == "/") {
    fs.readFile("index.html", (err, html) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(html);
      res.end();
    });
  } else if (req.url == "/about") {
    fs.readFile("about.html", (err, html) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(html);
      res.end();
    });
  } else if (req.url == "/create" && req.method == "POST") {
    const data = [];
    req.on("data", (chunk) => {
      data.push(chunk);
    });
    req.on("end", () => {
      const result = Buffer.concat(data).toString();
      const parsData = result.split("=")[1];
      fs.appendFile("index.txt", parsData, (err) => {
        if (err) {
          console.log(err);
        } else {
          res.statusCode = 302;
          res.setHeader("Location", "/create");
          res.end();
        }
      });
    });
  } else if (req.url == "/create") {
    fs.readFile("create.html", (err, js) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(js);
      res.end();
    });
  } else {
    fs.readFile("404.html", (err, html) => {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write(html);
      res.end();
    });
  }
};

module.exports = routeHandler;
