const express = require('express');
const next = require('next');
const { createProxyMiddleware } = require('http-proxy-middleware');
const envLocal = require('dotenv').config({ path: './.env' }).parsed;

const env = process.env.NODE_ENV;
const isDev = env === 'development';
const isTest = env === 'test';

const devProxy = {
  // Proxy to load question flow's images from staging
  '/qflow/static': {
    target: envLocal.PROXY_QFLOW_API_HOST,
    changeOrigin: true,
    secure: false,
  },
};

const port = parseInt(process.env.PORT, 10) || 3000;

const app = next({
  dir: '.', // base directory where everything is, could move to src later
  dev: isDev,
});

const handle = app.getRequestHandler();

let server;
app
  .prepare()
  .then(() => {
    server = express();

    // Set up the proxy.
    if ((isDev || isTest) && devProxy) {
      Object.keys(devProxy).forEach((context) => {
        server.use(context, createProxyMiddleware(devProxy[context]));
      });
    }

    // Default catch-all handler to allow Next.js to handle all other routes
    server.all('*', (req, res) => handle(req, res));

    server.listen(port, (err) => {
      if (err) {
        throw err;
      }
      // eslint-disable-next-line no-console
      console.log(`> Ready on port ${port} [${env}]`);
    });
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.log('An error occurred, unable to start the server');
    // eslint-disable-next-line no-console
    console.log(err);
  });
