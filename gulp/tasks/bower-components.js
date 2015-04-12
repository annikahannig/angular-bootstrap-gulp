'use strict';

/**
 * Task: bower_components
 *
 * Install all bower components in build directory.
 */

var gulp  = require('gulp');

// == Register task
gulp.task('bower_components', function(){
  gulp.src('bower_components/**')
    .pipe(gulp.dest('build/lib/'));
});

