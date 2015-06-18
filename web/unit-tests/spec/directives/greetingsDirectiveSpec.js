describe('The mqGreetings directive', function() {
    'use strict';

    beforeEach(angular.mock.module('musicQuizApp'));

    it('is defined', 
        angular.mock.inject(function (mqGreetingsDirective) {
            expect(mqGreetingsDirective).toBeDefined();
        }));
 
    it('is restricted to elements', 
    	angular.mock.inject(function (mqGreetingsDirective) {
    		expect(mqGreetingsDirective[0].restrict).toBe('E');
    	}));

    it('defines an inline template',
    	angular.mock.inject(function (mqGreetingsDirective) {
    		expect(mqGreetingsDirective[0].template).toBeDefined();
    	}));

    it('has set its replace property to true', 
    	angular.mock.inject(function (mqGreetingsDirective) {
    		expect(mqGreetingsDirective[0].replace).toBe(true);
    	}));

    it('defines a scope',
        angular.mock.inject(function (mqGreetingsDirective) {
            expect(mqGreetingsDirective[0].scope).toBeDefined();
        }));

    it('scopes a greeting property',
        angular.mock.inject(function (mqGreetingsDirective) {
            expect(mqGreetingsDirective[0].scope.greeting).toBeDefined();
        }));

    it('scopes a togreet object',
        angular.mock.inject(function (mqGreetingsDirective) {
            expect(mqGreetingsDirective[0].scope.togreet).toBeDefined();
        }));
});
