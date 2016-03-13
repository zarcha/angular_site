/**
 * Created by Zach on 3/11/16.
 */
var gulp = require('gulp'),
  uglify = require('gulp-uglify');

gulp.task('minify', function () {
  gulp.src('*/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('build'))
});
