(function () {
    'use strict';

    angular.module('myApp.products.factories').factory('fieldDefinitionSet', [fieldDefinitionSetFactory]);

    // NOTE This service holds custom static classes for domain models.
    // If it did not depend on anything, it could be defined as an Angular module.value() or module.constant() as well.

    function fieldDefinitionSetFactory() {
        // Service factory function

        // Configure for all possible UI input fields mapping all model 'parameters'
        // NOTE: for select input fields (isSelect: true) the defaulValue is the default selected lookup value in choices array

        var fieldDefinitionSet = {
            'fname': new fieldDefinition({
                name: 'fname',
                modelName: 'fname',
                tag: 'fname',
                isTextBox: true,
                isColumn: true,
                placeholder: 'First name'
            }),
            'lname': new fieldDefinition({
                name: 'lname',
                modelName: 'lname',
                tag: 'lname',
                isTextBox: true,
                isColumn: true,
                placeholder: 'Last name'
            }),
            'username': new fieldDefinition({
                name: 'username',
                modelName: 'username',
                tag: 'username',
                isTextBox: true,
                isColumn: true,
                placeholder: 'Username'
            }),
            'email': new fieldDefinition({
                name: 'email',
                modelName: 'email',
                tag: 'email',
                isTextBox: true,
                isColumn: true,
                placeholder: 'Email'
            }),
            'address': new fieldDefinition({
                name: 'address',
                modelName: 'address',
                tag: 'address',
                isTextBox: true,
                isColumn: true,
                placeholder: 'Address'
            }),
            'testdsdsadsa': new fieldDefinition({
                name: 'test',
                modelName: 'test',
                tag: 'test',
                isTextBox: true,
                isColumn: true,
                placeholder: 'test'
            })
        };

        // Finally, return new instance
        return fieldDefinitionSet;
    };

    function fieldDefinition(initial) {
        // Class constructor function

        // Enforce 'new' operator usage
        if (false === (this instanceof fieldDefinition)) {
            throw new Error('Must be invoked with "new" operator');
        }

        // Public instance members
        this.name;
        this.modelName;
        this.tag;
        this.isTextBox;
        this.isColumn;
        
        // Initialize
        _init.call(this, initial);

        return this;

        // Private instance members

        function _init(initial) {
            this.name = initial.name;
            this.modelName = initial.modelName;
            this.tag = initial.tag;
            this.isTextBox = initial.isTextBox;
            this.isColumn = initial.isColumn;            
        }
    }

    // Public shared members
    fieldDefinition.prototype.clone = function () {
        return new fieldDefinition(this);
    }

})();
