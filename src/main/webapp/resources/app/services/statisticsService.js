/**
 * Created by Chris on 09.08.2015.
 */
var app = angular.module("statisticsApp", ['ngResource']);

app.factory('battleServ', ['$resource', function($resource) {
    return $resource('battles/:battleId.json', {}, {
       query: {method: 'GET',
               params: {battleId:'battle'}, isArray: true}
    });
}]);