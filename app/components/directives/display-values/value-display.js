/// <reference path="../../../templates/name-template.html" />
angular.module('myApp.directive', [])
    .directive('valueDisplay', function () {
        return {
            restrict: 'EA', //E = element, A = attribute, C = class, M = comment         
            scope: {
                //@ reads the attribute value, = provides two-way binding, & works with functions
                user: '='
            },
            templateUrl: 'templates/name-template.html',
            link: function ($scope, element, attrs) {
                //logic goes here
                console.log($scope.user)
            } //DOM manipulation
        }
    });