'use strict';

// register the component, its associated controller and template
angular.
    module('familySortView').
    component('familySortView', {
        templateUrl: 'family-sort-view/family-sort-view.template.html',
        controller: function FamilySortViewController() {
            // used to filter the list of displayed family members
            this.sortBy = "name";
            this.members = [
                { name: "Robert", age: 70 },
                { name: "Joanne", age: 69 },
                { name: "Andrew", age: 39 },
                { name: "David", age: 35 },
                { name: "Jonathan", age: 34 },
                { name: "Perpetua" },
                { name: "Tiffany" },
                { name: "Karen" },
                { name: "Theresa", age: 14 },
                { name: "Thomas", age: 11 },
                { name: "Lisa", age: 5 },
                { name: "Ben", age: 5 },
                { name: "Jackson", age: 5 },
                { name: "Jameson", age: 2 },
                { name: "Leah", age: 2 }
            ];

            // sort by name
            var compareByName = function (a, b) {
                if (a.name < b.name) {
                    return -1
                }
                else if (a.name > b.name) {
                    return 1
                }
                else { return 0; }
            }

            // sort by age, break ties by sorting by name
            var compareByAge = function (a, b) {
                if (!a.age && !b.age) return compareByName(a, b);
                if (!a.age) return 1;
                if (!b.age) return -1;
                if (a.age < b.age) {
                    return 1;
                }
                else if (a.age > b.age) {
                    return -1;
                }
                else { return compareByName(a, b); }
            }

            // sort by age if told to; any other value means sort by name
            if (this.sortBy == 'age') {
                this.members.sort(compareByAge);
            }
            else {
                this.members.sort(compareByName);
            }
        }
    });
