'use strict';

angular.module('myApp.products.controllers')

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/products', {
        templateUrl: 'products.html',
        controller: 'productsCtrl'

    });
}])

.controller('productsCtrl', ['$scope', 'view1Service', 'eventManager', productsCtrl]);

function productsCtrl($scope, view1Service, eventManager) {
        //controller logic goes here    
        $scope.user = view1Service.userInfo();
        $scope.save = save;

        function save() {
            eventManager.saveEvent('save');
        }
    }
    