const { createProxyMiddleware } = require('http-proxy-middleware');
const jsonpAdapter = require('axios-jsonp');

module.exports = function(app) {
  app.use('/api', createProxyMiddleware({
    adapter: jsonpAdapter,
    target: 'https://public.api.openprocurement.org',
    changeOrigin: true,
  }));
};