'use strict';

/**
 * Task: html
 *
 * Copy all markup files.
 */

var gulp = require('gulp');


// == Register task
gulp.task('html', function(){
  gulp.src('app/index.html').pipe(gulp.dest('build/'));
});

