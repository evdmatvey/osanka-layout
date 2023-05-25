const { src, dest } = require('gulp');

const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const uglify = require('gulp-uglify-es').default;
const size = require('gulp-size');

const path = require('../config/path');
const app = require('../config/app');

const js = () => {
  return src(path.js.src, { sourcemaps: app.isDev })
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({ title: 'JS', message: error.message })),
      }),
    )
    .pipe(size({ title: 'JS до' }))
    .pipe(uglify())
    .pipe(size({ title: 'JS после' }))
    .pipe(dest(path.js.dest, { sourcemaps: app.isDev }));
};

module.exports = js;
