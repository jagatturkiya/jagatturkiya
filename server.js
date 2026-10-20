const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const PUBLIC_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2'
};

const server = http.createServer((req, res) => {
  const urlParts = req.url.split('?');
  let reqPath = decodeURI(urlParts[0]);
  const queryString = urlParts.length > 1 ? '?' + urlParts[1] : '';

  // Clean URLs: 301 Redirect .html extensions to extensionless URLs
  if (reqPath.endsWith('.html')) {
    if (reqPath === '/index.html') {
      res.writeHead(301, { 'Location': '/' + queryString });
      res.end();
      return;
    } else {
      const cleanUrl = reqPath.slice(0, -5);
      res.writeHead(301, { 'Location': cleanUrl + queryString });
      res.end();
      return;
    }
  }

  // Root mapping
  if (reqPath === '/' || reqPath === '') {
    reqPath = '/index.html';
  }

  let filePath = path.join(PUBLIC_DIR, reqPath);

  // Security: prevent path traversal outside PUBLIC_DIR
  if (!filePath.startsWith(PUBLIC_DIR)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('403 Forbidden');
    return;
  }

  // Check if file exists
  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // Check if .html can be appended (extensionless route)
      const htmlPath = filePath + '.html';
      if (fs.existsSync(htmlPath) && fs.statSync(htmlPath).isFile()) {
        filePath = htmlPath;
      } else {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
        res.end(`<h2>404 Not Found</h2><p>Page not found: ${reqPath}</p><a href="/">Return to Home</a>`);
        return;
      }
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': '*'
    });

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`===================================================`);
  console.log(`Jagat Turkiya Executive Website is running locally!`);
  console.log(`Local URL: http://localhost:${PORT}`);
  console.log(`===================================================`);
});
