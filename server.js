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

  server.get('/library/items', (req, res) => {
    return app.render(req, res, '/library-items', req.query);
  });

  server.get('/library/categories', (req, res) => {
    return app.render(req, res, '/library-categories', req.query);
  });

  server.get('/library/discounts', (req, res) => {
    return app.render(req, res, '/library-discounts', req.query);
  });

  server.get('/library/taxes', (req, res) => {
    return app.render(req, res, '/library-taxes', req.query);
  });

  server.get('/library/gratuity', (req, res) => {
    return app.render(req, res, '/library-gratuity', req.query);
  });

  server.get('/library/sales-type', (req, res) => {
    return app.render(req, res, '/library-sales-type', req.query);
  });

  server.get('/inventory/summary', (req, res) => {
    return app.render(req, res, '/inventory-summary', req.query);
  });

  server.get('/inventory/suppliers', (req, res) => {
    return app.render(req, res, '/inventory-suppliers', req.query);
  });

  server.get('/inventory/purchase-order', (req, res) => {
    return app.render(req, res, '/inventory-purchase-order', req.query);
  });

  server.get('/inventory/transfer', (req, res) => {
    return app.render(req, res, '/inventory-transfer', req.query);
  });

  server.get('/inventory/adjustment', (req, res) => {
    return app.render(req, res, '/inventory-adjustment', req.query);
  });

  server.get('/customers', (req, res) => {
    return app.render(req, res, '/customers', req.query);
  });

  server.get('/customers/:id', (req, res) => {
    return app.render(req, res, '/customers-detail', req.query);
  });

  server.get('/employee/account', (req, res) => {
    return app.render(req, res, '/employee-account', req.query);
  });

  server.get('/employee/access', (req, res) => {
    return app.render(req, res, '/employee-access', req.query);
  });

  server.get('/settings/account', (req, res) => {
    return app.render(req, res, '/account-settings', req.query);
  });

  server.get('/settings/receipt', (req, res) => {
    return app.render(req, res, '/receipt-settings', req.query);
  });

  server.get('/settings/checkout', (req, res) => {
    return app.render(req, res, '/checkout-settings', req.query);
  });

  server.get('/settings/notification', (req, res) => {
    return app.render(req, res, '/notification-settings', req.query);
  });

  server.get('*', (req, res) => handle(req, res));

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
