'use strict';

/**
  * Task: lint
  * Two words: code quality! 
  */

var gulp   = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('lint', function(){
  return gulp.src([
    'app/**/*.js',
    '!app/bower_components/**'
  ])
  .pipe(jshint())
  .pipe(jshint.reporter('jshint-stylish'));

});

