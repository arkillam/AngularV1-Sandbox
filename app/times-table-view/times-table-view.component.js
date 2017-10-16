'use strict';

// register the component, its associated controller and template
angular.
    module('timesTableView').
    component('timesTableView', {
        templateUrl: 'times-table-view/times-table-view.template.html',
        controller: function TimesTableViewController() {
            this.base = 1;
            this.range = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        }
    });
