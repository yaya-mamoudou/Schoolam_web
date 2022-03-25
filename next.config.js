const { i18n } = require('./next-i18next.config');
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['http://localhost:8000', 'ubuea.cm'],
  },
  i18n,
  trailingSlash: true,
};
