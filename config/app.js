const isProd = process.argv.includes('--production');
const isDev = !isProd;

module.exports = {
  htmlmin: { collapseWhitespace: isProd },
  img: {
    verbose: true,
  },
  isProd,
  isDev,
};
