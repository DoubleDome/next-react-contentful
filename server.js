const express = require('express');
const next = require('next');
const Router = require('./src/routes/routes');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: './dmp-dist/gen2/src', dev });
const handle = Router.getRequestHandler(app);
const path = require('path');

app
  .prepare()
  .then(() => {
    const server = express();

    /** ROOM DETAIL ROUTE */
    server.get('/room-detail/:id', (req, res) => {
      const actualPage = '/room-detail';
      const queryParams = { id: req.params.id };
      app.render(req, res, actualPage, queryParams);
    });

    server.use('/fonts/resources', express.static(path.join(__dirname, './dmp-dist/gen2/src/themes/fonts')));
    server.use('/static', express.static(path.join(__dirname, './next/static')));
    server.use('/themes', express.static(path.join(__dirname, './dmp-dist/gen2/src/themes')));
    
    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(8080, err => {
      if (err) throw err;
      console.log('> Ready on http://localhost:8080');
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
