const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

gulp.task('styles', function() {
  const plugins = [
    autoprefixer(),
    cssnano()
  ];

  return gulp.src('./src/**/*.sass')
    .pipe(sass())
    .pipe(postcss(plugins))
    .pipe(gulp.dest('./dist'));
});