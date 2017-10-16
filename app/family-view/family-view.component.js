'use strict';

// register the component, its associated controller and template
angular.
    module('familyView').
    component('familyView', {
        templateUrl: 'family-view/family-view.template.html',
        controller: function SandboxView1Controller() {
            this.name = "Andrew";
            this.spouse = "Perpetua";
            this.children = [
                {
                    name: 'Theresa',
                    age: '14'
                }, {
                    name: 'Thomas',
                    age: '11'
                }, {
                    name: 'Lisa',
                    age: '5'
                }
            ];
        }
    });
