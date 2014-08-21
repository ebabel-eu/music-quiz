musicQuizApp.controller('mainController', ['$scope', '$location', 'notificationsService', 

    function ($scope, $location, notificationsService) {
        'use strict';

        $scope.$location = $location;
        $scope.notifications = notificationsService;

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

    }

]);