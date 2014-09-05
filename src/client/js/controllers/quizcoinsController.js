musicQuizApp.controller('quizcoinsController', ['$scope', 

    function ($scope) {
        'use strict';

        $scope.quizCoins = {
            // How many Quiz Coins the current gamer holds.
            balance: 2,

            // At what level does the system think the current game has too few Quiz Coins.
            danger: 3
        };
    }

]);