  const fs = require('fs')
  const http = require('http');
  const port = 3000;
  let page = fs.readFileSync('index.html', 'utf8');

  http.createServer(function(req, res) {
      if (req.url === '/') {
          res.write('Hello world');
          res.end();
      } else if (req.url === '/about') {
          console.log('you requested localhost:3000/about')
          res.end();
      } else if (req.url === '/contact') {
          res.end(page);
      } else {
          res.write('Wrong Request');
          res.end();
      }
  }).listen(port, function() {
      console.log('server loaded port= ' + port);
  })