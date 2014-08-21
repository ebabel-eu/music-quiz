musicQuizApp.controller('mainController', ['$scope', '$location', 

    function ($scope, $location) {
        'use strict';

        $scope.$location = $location;

        $scope.nav = {
            greeting: 'Hello',
            name: 'Nadjib'
        };

        $scope.quizCoins = {
            // How many Quiz Coins the current gamer holds.
            balance: 11,

            // At what level does the system think the current game has too few Quiz Coins.
            danger: 3
        };

        $scope.notification = {
            level: ($scope.quizCoins.balance < $scope.quizCoins.danger) ? 'danger' : 'success',
            message: 'Your Quiz Coins balance is a bit low.'
        };
    }

]);