'use strict';

angular.module('myApp.sitemap.controllers')

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/sitemap', {
    templateUrl: 'sitemap.html',
    controller: 'sitemapCtrl'
  });
}])

.controller('sitemapCtrl', ['$scope', 'eventManager', sitemapCtrl]);

function sitemapCtrl($scope, eventManager) {
    //controller logic goes here    
}
