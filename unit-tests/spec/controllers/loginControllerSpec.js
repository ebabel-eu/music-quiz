describe('The login controller', function() {
    'use strict';

    var ctrl, $scope;

    beforeEach(angular.mock.module('musicQuizApp'));

    beforeEach(angular.mock.inject(function($rootScope, $controller) {
        $scope = $rootScope.$new();

        ctrl = $controller('loginController',
            {
                $scope: $scope
            });
    }));

    it('should be defined', function() {
        expect(ctrl).toBeDefined();
    });

    it('should have a showResult value in its scope', function() {
        expect($scope.$showResult).toBeDefined();
    });

    it('should have a login value in its scope', function() {
        expect($scope.$login).toBeDefined();
    });

    it('should have a notifications value in its scope', function() {
        expect($scope.$notifications).toBeDefined();
    });


});
