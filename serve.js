// serve.js - very small static file server for local testing
const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  try {
    let reqPath = decodeURIComponent(req.url.split('?')[0]);
    if (reqPath === '/') reqPath = '/index.html';
    // prevent directory traversal
    const safePath = path.normalize(reqPath).replace(/^\.+/, '');
    const filePath = path.join(__dirname, safePath);
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.statusCode = 404;
        res.end('Not found');
        return;
      }
      const ext = path.extname(filePath).toLowerCase();
      const types = {'.html':'text/html','.css':'text/css','.js':'application/javascript','.json':'application/json','.png':'image/png','.jpg':'image/jpeg','.svg':'image/svg+xml'};
      res.setHeader('Content-Type', types[ext] || 'application/octet-stream');
      res.end(data);
    });
  } catch (e) {
    res.statusCode = 500;
    res.end('Server error');
  }
});

server.listen(port, () => console.log(`Static server running at http://localhost:${port}`));
