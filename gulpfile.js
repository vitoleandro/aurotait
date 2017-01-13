'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', () => {
  return gulp.src('app/assets/stylesheets/dev/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/assets/stylesheets/dist/'));
});

gulp.task('default', () => {
  gulp.watch('app/assets/stylesheets/dev/**/*.scss', ['sass']);
});
