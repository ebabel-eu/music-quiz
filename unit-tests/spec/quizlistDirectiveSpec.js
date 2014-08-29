describe('The mqQuizlist directive', function() {
    'use strict';

    beforeEach(angular.mock.module('musicQuizApp'));

    it('is defined', 
        angular.mock.inject(function (mqQuizlistDirective) {
            expect(mqQuizlistDirective).toBeDefined();
        }));

    it('is restricted to elements', 
    	angular.mock.inject(function (mqQuizlistDirective) {
    		expect(mqQuizlistDirective[0].restrict).toBe('E');
    	}));

    it('defines an template Url',
    	angular.mock.inject(function (mqQuizlistDirective) {
    		expect(mqQuizlistDirective[0].templateUrl).toBeDefined();
    	}));

    it('has set its replace property to true', 
    	angular.mock.inject(function (mqQuizlistDirective) {
    		expect(mqQuizlistDirective[0].replace).toBe(true);
    	}));
});
