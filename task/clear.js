const del = require('del');

const path = require('../config/path');

const clear = () => {
  return del(path.root);
};

module.exports = clear;
