describe('The mqFooter directive', function() {
    'use strict';

    beforeEach(angular.mock.module('musicQuizApp'));

    it('is defined', 
        angular.mock.inject(function (mqFooterDirective) {
            expect(mqFooterDirective).toBeDefined();
        }));

    it('is restricted to elements', 
    	angular.mock.inject(function (mqFooterDirective) {
    		expect(mqFooterDirective[0].restrict).toBe('E');
    	}));

    it('defines an template URL',
    	angular.mock.inject(function (mqFooterDirective) {
    		expect(mqFooterDirective[0].templateUrl).toBeDefined();
    	}));

    it('has set its replace property to true', 
    	angular.mock.inject(function (mqFooterDirective) {
    		expect(mqFooterDirective[0].replace).toBe(true);
    	}));
});
