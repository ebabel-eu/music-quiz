describe('The greetings controller', function() {
    'use strict';

    var ctrl, $scope;

    beforeEach(angular.mock.module('musicQuizApp'));

    beforeEach(angular.mock.inject(function($rootScope, $controller) {
        $scope = $rootScope.$new();

        ctrl = $controller('greetingsController',
            {
                $scope: $scope
            });
    }));

    it('should be defined', function() {
        expect(ctrl).toBeDefined();
    });

    it('should have a scope', function() {
        expect($scope).toBeDefined();
    });

    it('shoud scope a greeting property', function() {
        expect($scope.greeting).toBeDefined();
    });

});