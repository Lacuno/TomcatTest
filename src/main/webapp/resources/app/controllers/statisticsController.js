/**
 * Created by Chris on 08.08.2015.
 */
var app = angular.module("statisticsApp");

app.controller("statisticsCtrl", ['$scope', 'battleServ', function($scope, battleServ) {
    // Init
    battleServ.query();






    // New Player
    $scope.addNewPlayer = function() {
        if($scope.validateNewPlayer() == false) {
            $scope.players.push($scope.newPlayer);
            $scope.newPlayer = "";
        }
    };

    $scope.validateNewPlayer = function() {
        if(typeof $scope.newPlayer != 'undefined' && $scope.newPlayer != "" &&
            $scope.players.indexOf($scope.newPlayer) == -1 ) {

            $scope.isNewPlayerButtonDisabled = false;
            return false;
        } else {
            $scope.isNewGameButtonDisabled = true;
            return true;
        }
    };

    $scope.isNewGameButtonDisabled = true;

    $scope.players = [
        "chris", "gabriel", "phil"
    ];

    $scope.playersFor1 = $scope.players.slice();
    $scope.playersFor2 = $scope.players.slice();

    $scope.nations = [
        "Orcs", "Elves", "Isengard"
    ];

    $scope.battles = [
        {
            player1: {
                name: "chris",
                nation: "Orcs",
            },
            player2: {
                name: "gabriel",
                nation: "Elves"
            },
            winner: "chris",
            duration: "1:30h"
        },
        {
            player1: {
                name: "gabriel",
                nation: "Isengard",
            },
            player2: {
                name: "phil",
                nation: "Elves"
            },
            winner: "phil",
            duration: "1:32h"
        }
    ];

    $scope.newGame = {};

    // NewGame functions
    $scope.playersInNewMatch = function() {
        var playersInMatch = [];
        if($scope.newGame.player1 != undefined) {
            playersInMatch.push($scope.newGame.player1);
        }
        if($scope.newGame.player2 != undefined) {
            playersInMatch.push($scope.newGame.player2);
        }
        return playersInMatch;
    };

    $scope.validateNewGame = function() {
        if(typeof $scope.newGame.player1 == 'undefined' || typeof $scope.newGame.player2 == 'undefined' ||
            typeof $scope.newGame.nation1 == 'undefined' || typeof $scope.newGame.nation2 == 'undefined' ||
            typeof $scope.newGame.winner == 'undefined' || $scope.newGame.winner == null) {
            return true;
        } else {
            return false;
        }
    };

    $scope.addNewGame = function() {
        if($scope.validateNewGame() == false) {
            $scope.battles.push(
                {
                    player1: {
                        name: $scope.newGame.player1,
                        nation: $scope.newGame.nation1
                    },
                    player2: {
                        name: $scope.newGame.player2,
                        nation: $scope.newGame.nation2
                    },
                    winner: $scope.newGame.winner,
                    duration: "0:01h"
                }
            );
        }
        $scope.newGame = {};
    };


    // Table functions
    $scope.isWinner = function(player, battle) {
        if(player.name == battle.winner) {
            return "winner";
        } else {
            return "loser";
        }
    }


}]);