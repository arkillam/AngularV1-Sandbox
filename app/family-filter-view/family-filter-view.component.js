'use strict';

// register the component, its associated controller and template
angular.
    module('familyFilterView').
    component('familyFilterView', {
        templateUrl: 'family-filter-view/family-filter-view.template.html',
        controller: function FamilyFilterViewController() {
            // used to filter the list of displayed family members
            this.query = "";
            this.members = [
                "Robert", "Joanne", "David", "Jonathan", "Andrew", "Perpetua", "Theresa", "Thomas", "Lisa", "Tiffany", "Leah", "Ben", "Karen", "Jackson", "Jameson"
            ];
        }
    });
