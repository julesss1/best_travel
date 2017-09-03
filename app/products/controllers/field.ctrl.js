(function () {
    'use strict';

    // Declare using array notation to be compatible with minifying
    angular.module('myApp.products.controllers').
        controller('fieldController', [
            '$scope', 'fieldRepository', 'fieldDefinitionSet', 'eventManager', fieldController]);

    function fieldController($scope, fieldRepository, fieldDefinitionSet, eventManager) {
        // Controller class constructor function

        // Private instance members        
        
        // Initialize
        init();

        return this;

        function init() {
            //controller logic goes here    
            //show parameters on initialization
            setPanesFrom();

            //eventManager.onSaveEvent($scope, function (evt, data) {
            //    save(data);
            //});
            

            //$scope.choices = {
            //    paramPackageChoices: loadGender()
            //};

            
            // set scope actions 
            $scope.parameterValueChanged = parameterValueChanged;
            


        }

        // Show/ hide/ store/ restore parameter panes

        function setPanesFrom() {
            $scope.view1FieldGroup = fieldRepository.getView1Fields();
            $scope.view2FieldGroup = fieldRepository.getView2Fields();
        }

        function hidePanes() {
            $scope.fieldGroup = null;
        }

        // Show/ hide/ store/ restore parameter values

        function setDefaultValues() {
            // for each parameter definition ...
            Object.keys(fieldDefinitionSet).forEach(function (paramName) {
                // grab its default value and set that on
                // the actual parameter within current selection

                var paramDef = fieldDefinitionSet[paramName];

                var defaultValue = paramDef.defaultValue;
                var modelName = paramDef.modelName;

                $scope.selection[modelName] = defaultValue;
            });

        }
        
        // clear all values
        function emptyParamValues() {
            var paramValues = Object.keys(fieldDefinitionSet).map(function (paramName) {
                // grab the actual parameter within current selection
                // and return its current value 
                var paramDef = fieldDefinitionSet[paramName];

                var modelName = paramDef.modelName;
                var value = $scope.selection[modelName];
                $scope.selection[modelName] = null;
                return {
                    modelName: modelName,
                    value: null,
                };
            });            
        }

        function restoreValues() {
            var paramValues = amplify.store(paramValuesKey);
            // for each stored parameter value ...
            paramValues.forEach(function (valueItem) {
                // grab the related parameter within current selection
                // and set its value from the stored one

                var modelName = valueItem.modelName;
                var value = valueItem.value;

                if (valueItem.modelName === 'paramDate' && value !== null) {
                    value = value.toString('dd/MM/yyyy');
                }
                $scope.selection[modelName] = value;

            });

        }

        function parameterValueChanged(modelName) {
            //alert(modelName);
        }

        function setLoading(loading) {
            //implement loader
        }
        
    };

})();