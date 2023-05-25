const { src, dest } = require('gulp');

const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const gulpIf = require('gulp-if');

const path = require('../config/path');
const app = require('../config/app');

const img = () => {
  return src(path.img.src)
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({ title: 'img', message: error.message })),
      }),
    )
    .pipe(newer(path.img.dest))
    .pipe(gulpIf(app.isProd, imagemin(app.img)))
    .pipe(dest(path.img.dest));
};

module.exports = img;
