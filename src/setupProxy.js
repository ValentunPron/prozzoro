const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/api', createProxyMiddleware({
  target: 'https://public.api.openprocurement.org',
  changeOrigin: true,
}));

app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});





