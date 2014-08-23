musicQuizApp.controller('loginController', ['$scope', 'loginService', 
    
    function ($scope, loginService) {
        'use strict';

        $scope.login = loginService;
    }
]);