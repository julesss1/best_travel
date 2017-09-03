(function() {
    'use strict';

    angular.module('myApp.products.services').service('view1Service', [view1Service]);

    function view1Service() {

            this.userInfo = function () {
                var user = {
                    fname: "Julian",
                    lname: "Heissl",
                    username: 'jheissl',
                    email: 'jheissl@cloud.com',
                    address: "London"
                }

                return user;
            }        
        }
})();