describe('Controller mainController', function() {
    'use strict';

    var ctrl, $scope;

    beforeEach(angular.mock.module('musicQuizApp'));

    beforeEach(angular.mock.inject(function($rootScope, $controller) {
        $scope = $rootScope.$new();

        ctrl = $controller('mainController',
            {
                $scope: $scope
            });
    }));

    it('should be defined', function() {
        expect(ctrl).toBeDefined();
    });

    it('should have a location value in its scope', function() {
        expect($scope.$location).toBeDefined();
    });

});