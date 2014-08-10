musicQuizApp.controller('decibelAccountController', ['$scope', 'decibelAccountService', 

    function ($scope, decibelAccountService) {
        'use strict';
        
        $scope.decibelAccount = decibelAccountService;
    }

]);