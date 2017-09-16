var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var notify = require("gulp-notify");
var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function() {
  gulp.src('./src/point.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(rename('point.css'))
    .pipe(gulp.dest('./playground'))
    .pipe(notify({ message: 'styles task complete' }))
    .pipe(connect.reload());;
});

gulp.task('watch', function() {
  gulp.watch('./src/**/*.scss', ['styles']);
});

gulp.task('connect', function() {
  connect.server({
    root: 'playground',
    livereload: true
  });
});

gulp.task('default', ['styles', 'connect', 'watch']);
