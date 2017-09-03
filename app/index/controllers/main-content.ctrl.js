'use strict';

angular.module('myApp.main.content.controllers')

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/index', {
    templateUrl: 'main-content.html',
    controller: 'mainContentCtrl'
  });
}])

.controller('mainContentCtrl', ['$scope', 'eventManager', mainContentCtrl]);

function mainContentCtrl($scope, eventManager) {
    //controller logic goes here    
    $scope.user = {
        fname: 'faruk',
        lname: 'pobric'
    }
    $scope.save = save;

    function save() {
        eventManager.saveEvent('save');
    }
}
