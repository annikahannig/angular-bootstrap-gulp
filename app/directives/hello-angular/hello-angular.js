'use strict';

/**
 * 
 * Hello Angular 
 * -------------
 *
 * Welcome directive
 *
 * (c) 2015 Matthias Hannig
 */

// == Hello Angular controller
var helloAngularCtrl = function($scope){
  $scope.hello = 'Hello Angular';
  $scope.time  = new Date();
};

// == Create directive hello-angular 
var helloAngular = function($interval){
  var self = {
    templateUrl: 'directives/hello-angular/hello-angular.html',
    link: function(scope, el, attr){
      
      // Register update interval for time
      var updateTime = $interval(function(){
        scope.time = new Date();
      }, 1000);

      // Clear interval when element is removed
      el.on('$destroy',function(){
        $interval.cancel(updateTime);
      });

    },
    controller: [ 
      '$scope',
      helloAngularCtrl
    ]
  };

  return self;
};

// == Register directive
var app = angular.module('app.components');
app.directive( 'helloAngular', [
  '$interval',
  helloAngular
]);

