const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use('/api', () => console.log('API Corner'));

  server.get('/login', (req, res) => {
    return app.render(req, res, '/login', req.query);
  });

  server.get('/choose', (req, res) => {
    return app.render(req, res, '/list-app', req.query);
  });

  server.get('/cashier', (req, res) => {
    return app.render(req, res, '/list-outlet', req.query);
  });

  server.get('/', (req, res) => {
    return app.render(req, res, '/index', req.query);
  });


  server.get('*', (req, res) => handle(req, res));

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
