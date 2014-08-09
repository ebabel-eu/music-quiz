describe('Controller decibelAccountController', function() {
    'use strict';

    var ctrl, decibelAccountService, $scope;

    beforeEach(angular.mock.module('musicQuizApp'));

    beforeEach(angular.mock.inject(function($rootScope, $controller) {
        $scope = $rootScope.$new();

        ctrl = $controller('decibelAccountController',
            {
                $scope: $scope
            });
    }));

    it('should have a decibelAccount with the expected applicationId default value', function() {
        expect($scope.decibelAccount.applicationId).toBe(null);
    });

    it('should have a decibelAccount with the expected applicationKeys default value', function() {
        expect($scope.decibelAccount.applicationKeys).toBe(null);
    });

});