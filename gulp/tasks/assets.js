'use strict';

/**
 * Task: assets 
 *
 * Copy / process all assets like images, fonts, etc.
 */

var gulp = require('gulp');

// == Register task: watch
gulp.task('assets', function(){
  
  // Just copy all assets.
  gulp.src('app/assets/**/*')
    .pipe(gulp.dest('build/assets'));

});

