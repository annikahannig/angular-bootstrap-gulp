'use strict';

/**
 * Task: stylesheets 
 *
 * Compile stylesheets from less source.
 */

var gulp   = require('gulp');
var less   = require('gulp-less');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');

// == Register task: stylesheets 
gulp.task('stylesheets', function(){
  
  // Compile less files
  gulp.src('app/css/*.less')
    .pipe(less())
    .pipe(gulp.dest('build/css/'))
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('build/css/'));
  
});

