'use strict';

/**
 * Task: scripts
 *
 * Compile javascript source.
 */

var gulp       = require('gulp');
var browserify = require('gulp-browserify');

// == Register task: scripts
gulp.task('scripts', ['lint'], function(){
  
  gulp.src('app/*.js')
    .pipe(browserify({
      insertGlobals: false
    }))
    .pipe(gulp.dest('build/'));

});

