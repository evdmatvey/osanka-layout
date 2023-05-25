const { src, dest } = require('gulp');

const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const rename = require('gulp-rename');
const size = require('gulp-size');
const shorthand = require('gulp-shorthand');
const groupCssMediaQueries = require('gulp-group-css-media-queries');
const sass = require('gulp-sass')(require('sass'));
const sassGlob = require('gulp-sass-glob');

const path = require('../config/path');
const app = require('../config/app');

const scss = () => {
  return src(path.scss.src, { sourcemaps: app.isDev })
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({ title: 'SCSS', message: error.message })),
      }),
    )
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(size({ title: 'SCSS до' }))
    .pipe(shorthand())
    .pipe(groupCssMediaQueries())
    .pipe(dest(path.scss.dest, { sourcemaps: app.isDev }))
    .pipe(csso())
    .pipe(size({ title: 'SCSS после' }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest(path.scss.dest, { sourcemaps: app.isDev }));
};

module.exports = scss;
