(function () {
    'use strict';

    angular.module('myApp.products.factories').factory('fieldRepository', ['fieldDefinitionSet',
        fieldRepositoryFactory]);

    // NOTE This service holds custom static classes for domain models.
    // If it did not depend on anything, it could be defined as an Angular module.value() or module.constant() as well.

    function fieldRepositoryFactory(fieldDefinitionSet) {
        // Service factory function

        function fieldRepository() {
            // Service class constructor function

            // Enforce 'new' operator usage
            if (false === (this instanceof fieldRepository)) {
                throw new Error('Must be invoked with "new" operator');
            }

            // Public instance members 

            this.getView1Fields = function () {
                return view1InputFields;
            };
            this.getView2Fields = function () {
                return view2InputFields;
            }

            // Initialize
            init();

            return this;

            // Private instance members 

            var view1InputFields;
            var view2InputFields;
           
            function init() {
                // use predefind input parameters on initialization
                view1InputFields = getView1Fields();
                view2InputFields = getView2Fields();
            }

            function getView1Fields() {

                //set view1 input fields
                var view1Fields = [
                    fieldDefinitionSet['fname'],
                    fieldDefinitionSet['lname'],
                    fieldDefinitionSet['username'],
                    fieldDefinitionSet['address'],
                    fieldDefinitionSet['email'],
                    fieldDefinitionSet['testdsdsadsa']
                ];

                return view1Fields;
            }
            
            function getView2Fields() {

                //set view2 input fields
                var view2Fields = [{
                    groupTitle: 'Two columns of input fields',

                    firstInspection: {
                        leftSide: {
                            paramDefs: [
                                fieldDefinitionSet['fname'],
                                fieldDefinitionSet['lname'],
                            ],
                        },
                        rightSide: {
                            paramDefs: [
                                fieldDefinitionSet['email'],
                                fieldDefinitionSet['username'],
                                fieldDefinitionSet['address'],
                            ]
                        },

                    }
                }];


                return view2Fields;
            }
        }

        return new fieldRepository();
    };

})();
