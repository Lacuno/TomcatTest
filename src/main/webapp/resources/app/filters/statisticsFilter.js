/**
 * Created by Chris on 09.08.2015.
 */
var app = angular.module("statisticsApp");

app.filter('excludeValue', function () {
        return function(input, originalValues, exclude) {
            // Input is a array of strings
            // Exclude is a single specific value
            input = originalValues.slice();

            var index = input.indexOf(exclude);
            if(index > -1) {
                input.splice(index,1);
            }
            return input;
        };
    }
);

app.filter('capitalize', function() {
    return function(input) {
        return input.charAt(0).toUpperCase() + input.substr(1).toLowerCase();
    }
});