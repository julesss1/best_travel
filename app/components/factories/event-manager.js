(function () {
    'use strict';

    // Declare using array notation to be compatible with minifying
    angular.module('myApp.components.factories').factory('eventManager', ['$rootScope',
        eventManagerFactory]);

    function eventManagerFactory($rootScope) {
        // Service factory function

        function eventManager() {
            // Service class constructor function

            // Enforce 'new' operator usage
            if (false === (this instanceof eventManager)) {
                throw new Error('Must be invoked with "new" operator');
            }

            return this;
        }

        angular.extend(eventManager.prototype, {
            // Shared members

            // Save event

            saveEvent: function (data) {
                $rootScope.$broadcast(eventView1, data);
            },

            onSaveEvent: function (scope, listener) {
                var unregister = scope.$on(eventView1, function (evt, data) {
                    listener(evt, data);
                });
                return unregister;
            }
        });

        // Private static members
        var eventView1 = 'event1.evt';

        // Finally, return new instance
        return new eventManager();
    }

})();
