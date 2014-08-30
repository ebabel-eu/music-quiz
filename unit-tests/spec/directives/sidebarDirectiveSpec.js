describe('The mqSidebar directive', function() {
    'use strict';

    beforeEach(angular.mock.module('musicQuizApp'));

    it('is defined', 
        angular.mock.inject(function (mqSidebarDirective) {
            expect(mqSidebarDirective).toBeDefined();
        }));

    it('is restricted to elements', 
    	angular.mock.inject(function (mqSidebarDirective) {
    		expect(mqSidebarDirective[0].restrict).toBe('E');
    	}));

    it('defines an template Url',
    	angular.mock.inject(function (mqSidebarDirective) {
    		expect(mqSidebarDirective[0].templateUrl).toBeDefined();
    	}));

    it('has set its replace property to true', 
    	angular.mock.inject(function (mqSidebarDirective) {
    		expect(mqSidebarDirective[0].replace).toBe(true);
    	}));
});
