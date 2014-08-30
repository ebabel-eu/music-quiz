describe('The quiz coins controller', function() {
    'use strict';

    var ctrl, $scope;

    beforeEach(angular.mock.module('musicQuizApp'));

    beforeEach(angular.mock.inject(function($rootScope, $controller) {
        $scope = $rootScope.$new();

        ctrl = $controller('quizcoinsController',
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

    it('shoud scope a quizCoins object', function() {
        expect($scope.quizCoins).toBeDefined();
    });

    it('should scope a quizCoins object with a balance property', function () {
        expect($scope.quizCoins.balance).toBeDefined();
    });

    it('should scope a quizCoins object with a danger property', function () {
        expect($scope.quizCoins.danger).toBeDefined();
    });

    it('should scope of quizCoins object with a balance that is a number', function () {
        expect($scope.quizCoins.balance).toEqual(jasmine.any(Number));
    });

    it('should scope of quizCoins object with a danger that is a number', function () {
        expect($scope.quizCoins.danger).toEqual(jasmine.any(Number));
    });

});