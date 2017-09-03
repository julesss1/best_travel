'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.components.factories',
  'myApp.products.controllers',
  'myApp.products.services',
  'myApp.products.factories',
  'myApp.main.content.controllers',
  'myApp.jobs.controllers',
  'myApp.sitemap.controllers',
  'myApp.version',
  'myApp.directive'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/index'});
}]);
