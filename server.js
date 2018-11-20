const express = require('express');
const next = require('next');
const Router = require('./src/routes/routes');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: './dmp-dist/gen2/src', dev });
const handle = Router.getRequestHandler(app);

app.prepare()
  .then(() => {
    const server = express();

    /** ROOM DETAIL ROUTE */
    server.get('/:id', (req, res) => {
      const actualPage = '/room-detail';
      const queryParams = { id: req.params.id };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, (err) => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
