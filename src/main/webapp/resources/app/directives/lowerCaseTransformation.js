var app = angular.module("statisticsApp");

app.directive('makeLowerCase', function() {
   return {
       require: 'ngModel',
       link: function(scope, element, attrs, modelCtrl) {
           modelCtrl.$parsers.push(function(inputValue) {
               if(inputValue == null) {
                   return null;
               }
               var transformedInput = inputValue.toLowerCase();
               return transformedInput;
           });
       }
   };
});