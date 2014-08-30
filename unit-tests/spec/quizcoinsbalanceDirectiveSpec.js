describe('The mqQuizcoinsbalance directive', function() {
    'use strict';

    beforeEach(angular.mock.module('musicQuizApp'));

    it('is defined', 
        angular.mock.inject(function (mqQuizcoinsbalanceDirective) {
            expect(mqQuizcoinsbalanceDirective).toBeDefined();
        }));
 
    it('is restricted to elements', 
    	angular.mock.inject(function (mqQuizcoinsbalanceDirective) {
    		expect(mqQuizcoinsbalanceDirective[0].restrict).toBe('E');
    	}));

    it('defines an inline template',
    	angular.mock.inject(function (mqQuizcoinsbalanceDirective) {
    		expect(mqQuizcoinsbalanceDirective[0].template).toBeDefined();
    	}));

    it('has set its replace property to true', 
    	angular.mock.inject(function (mqQuizcoinsbalanceDirective) {
    		expect(mqQuizcoinsbalanceDirective[0].replace).toBe(true);
    	}));

    it('has set its transclude property to true',
        angular.mock.inject(function (mqQuizcoinsbalanceDirective) {
            expect(mqQuizcoinsbalanceDirective[0].transclude).toBe(true);
        }));

    it('defines a scope',
        angular.mock.inject(function (mqQuizcoinsbalanceDirective) {
            expect(mqQuizcoinsbalanceDirective[0].scope).toBeDefined();
        }));

    it('scopes a quizCoins object',
        angular.mock.inject(function (mqQuizcoinsbalanceDirective) {
            expect(mqQuizcoinsbalanceDirective[0].scope.quizCoins).toBeDefined();
        }));
});
