const { src, dest } = require('gulp');

const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const fileInclude = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');
const size = require('gulp-size');

const path = require('../config/path');
const app = require('../config/app');

const html = () => {
  return src(path.html.src)
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({ title: 'HTML', message: error.message })),
      }),
    )
    .pipe(fileInclude())
    .pipe(size({ title: 'HTML до' }))
    .pipe(htmlmin(app.htmlmin))
    .pipe(size({ title: 'HTML после' }))
    .pipe(dest(path.html.dest));
};

module.exports = html;
