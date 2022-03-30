const { i18n } = require('./next-i18next.config');
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['http://localhost:8000', 'ubuea.cm', 'res.cloudinary.com'],
  },
  i18n,
  trailingSlash: true,
  env: {
    NEXT_MAP_API_KEY: 'AIzaSyCFKaSexrDwhs71JfmiUX2gogSI8_FQ3mc',
  },
};
