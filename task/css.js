const { src, dest } = require('gulp');

const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const concat = require('gulp-concat');
const cssimport = require('gulp-cssimport');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const rename = require('gulp-rename');
const size = require('gulp-size');
const shorthand = require('gulp-shorthand');
const groupCssMediaQueries = require('gulp-group-css-media-queries');

const path = require('../config/path');
const app = require('../config/app');

const css = () => {
  return src(path.css.src, { sourcemaps: app.isDev })
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({ title: 'CSS', message: error.message })),
      }),
    )
    .pipe(concat('main.css'))
    .pipe(cssimport())
    .pipe(autoprefixer())
    .pipe(size({ title: 'CSS до' }))
    .pipe(shorthand())
    .pipe(groupCssMediaQueries())
    .pipe(dest(path.css.dest, { sourcemaps: app.isDev }))
    .pipe(csso())
    .pipe(size({ title: 'CSS после' }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest(path.css.dest, { sourcemaps: app.isDev }));
};

module.exports = css;
