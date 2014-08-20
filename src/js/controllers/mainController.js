musicQuizApp.controller('mainController', ['$scope', '$location', 

    function ($scope, $location) {
        'use strict';

        $scope.$location = $location;

        $scope.nav = {
            greeting: 'Hello',
            name: 'Nadjib'
        };

        $scope.quizCoinBalance = 0;
    }

]); 