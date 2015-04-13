'use strict';

/**
 * Task: watch 
 *
 * Watch filesystem for changes in files and 
 * run the corresponding tasks.
 */

var gulp = require('gulp');

// == Register task: watch
gulp.task('watch', function(){

  // Watch CSS, Scripts, HTML, and everything
  // else in the source directory
  gulp.watch('app/**/*.js',     ['scripts']);
  gulp.watch('app/**/*.less',   ['stylesheets']);
  gulp.watch('app/**/*.html',   ['html']);
  gulp.watch('app/assets/**/*', ['assets']);

});

