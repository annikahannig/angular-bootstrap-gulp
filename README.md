
# Angular, Bootstrap and Gulp 

[![Build Status](https://travis-ci.org/mhannig/angular-bootstrap-gulp.svg?branch=master)](https://travis-ci.org/mhannig/angular-bootstrap-gulp)

Boilerplate code for an angular app using bootstrap and less.
Build it with:

   $ sudo npm install -g gulp
   $ sudo npm install -g bower

   $ npm install
   $ bower install

   $ gulp


## Gulp tasks

* `gulp` - Make a clean build.
* `gulp serve` - Start a webserver and serve the static content in the `'build/'` directory.
* `gulp watch` - Watch filesystem for changes.

## Build configuration

You can configure the build process in `gulp/config.json`.

Options:

* `serve.port` - The listening port for the builtin webserver.
* `angular.bundle` - Array of angular source files, to be bundled into `build/angular.js`.

## Contributing

1. Fork it ( https://github.com/mhannig/angular-bootstrap-gulp/fork )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request

