'use strict';

angular.module('myApp.jobs.controllers')

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/jobs', {
    templateUrl: 'jobs.html',
    controller: 'jobsCtrl'
  });
}])

.controller('jobsCtrl', ['$scope', 'eventManager', jobsCtrl]);

function jobsCtrl($scope, eventManager) {
    //controller logic goes here    
}
