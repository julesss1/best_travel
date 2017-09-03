(function () {
    'use strict';

    // Declare using array notation to be compatible with minifying
    angular.module('myApp.products.controllers').
        controller('saveController', [
            '$scope', 'eventManager', saveController]);

    function saveController($scope, eventManager) {
        // Controller class constructor function

        // Private instance members        

        // Initialize
        init();

        return this;

        function init() {          
            //controller logic goes here    
            eventManager.onSaveEvent($scope, function (evt, data) {
                save(data);
            });

            function save(data) {
                //alert(data);
            }
        } 
    };

})();