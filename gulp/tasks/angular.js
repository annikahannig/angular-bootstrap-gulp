'use strict';

/**
 * Task: angular
 *
 * Build angular library / concat all dependent 
 * libraries and make an angular bundle.
 *
 * See: config.angular.bundle
 *
 * (c) 2015 Matthias Hannig
 */

var gulp   = require('gulp');
var uglify = require('gulp-uglifyjs');

gulp.task('angular', function() {
  
  var files = global.config.angular.bundle.map(function(f){
    return 'bower_components/' + f;
  });

  gulp.src(files)
    .pipe(uglify('angular.js'))
    .pipe(gulp.dest('build/lib'));

});

