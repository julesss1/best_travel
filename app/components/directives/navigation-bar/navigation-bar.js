/// <reference path="../../../templates/name-template.html" />
angular.module('myApp.directive', [])
    .directive('navigationBar', function () {
        return {
            restrict: 'EA', //E = element, A = attribute, C = class, M = comment         
            scope: {
                //@ reads the attribute value, = provides two-way binding, & works with functions
                user: '='
            },
            templateUrl: 'templates/navigation-bar.html',
            link: function ($scope, element, attrs) {
                //initialize object and set default view
                $scope.activeView = {
                    index: true,
                    products: false,
                    destinations: false,
                    jobs: false,
                    sitemap: false
                }
                $scope.viewClicked = function (viewName) {
                    //set all project properties to false
                    angular.forEach($scope.activeView, function (value, key) {
                        $scope.activeView[key] = false;
                        console.log($scope.activeView, '$scope.activeView');

                    });
                    //switch cases on menu selected view
                    switch (viewName) {
                        case 'index':
                            $scope.activeView.index = true;
                            break;
                        case 'products':
                            $scope.activeView.products = true;
                            break;
                        case 'destination':
                            $scope.activeView.destinations = true;
                            break;
                        case 'jobs':
                            $scope.activeView.jobs = true;
                            break;
                        case 'sitemap':
                            $scope.activeView.sitemap = true;
                            break;
                            

                    }
                }
            } //DOM manipulation
        }
    });