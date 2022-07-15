const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

const urlPrefix = process.env.URL_PREFIX ? '/' + process.env.URL_PREFIX : '';

module.exports = {
  basePath: urlPrefix,
  trailingSlash: true,
  reactStrictMode: true,
  devIndicators: {
    buildActivityPosition: 'bottom-right',
  },
  poweredByHeader: false,
};

module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching,
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
  },
});
