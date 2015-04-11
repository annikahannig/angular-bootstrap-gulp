'use strict';

/**
 * Task: serve
 * -----------
 *
 * Starts a local http server (similar to grunt serve)
 * See '../config.json' for configuration options.
 *
 * (c) 2015 Matthias Hannig
 */

var gulp    = require('gulp');
var gutil   = require('gulp-util');
var http    = require('http');
var express = require('express');


// == Register serve task
gulp.task('serve', function(){

  // Create Express server
  var app = express();

  // Configure server
  var server = http.createServer(app);

  server.listen(global.config.serve.port);
  server.on('error', function(e){
    if(e.code === 'EADDRINUSE') {
      gutil.log('Address is already in use. Is a "serve" task running?');
    }
    else {
      throw e;
    }
  });
  
  // Serve static build dir
  app.use('/', express.static('./build'));

});

