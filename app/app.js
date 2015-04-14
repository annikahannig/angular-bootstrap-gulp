'use strict';

/**
 * Angular App 
 * ------------
 *
 * My Angular App. For My Project.
 * 
 * Insert copyright here.
 *
 */

require('./directives/');

// Initialize admin application.
angular.module('app', [
  'ngAnimate',
  'ngCookies',

  'app.directives'
]);

// Bootstrap angular
angular.element(document).ready(function(){
  angular.bootstrap(document, ['app']);
});

