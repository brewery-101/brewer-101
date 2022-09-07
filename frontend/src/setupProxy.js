const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/apis',
    createProxyMiddleware({
      logLevel: 'debug',
      target: "http://137.184.190.168:8080",
      changeOrigin: true,
    })
  );
};