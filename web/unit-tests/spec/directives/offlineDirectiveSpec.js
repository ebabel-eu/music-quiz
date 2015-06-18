describe('The mqOffline directive', function() {
    'use strict';

    beforeEach(angular.mock.module('musicQuizApp'));

    it('is defined', 
        angular.mock.inject(function (mqOfflineDirective) {
            expect(mqOfflineDirective).toBeDefined();
        }));

    it('is restricted to elements', 
    	angular.mock.inject(function (mqOfflineDirective) {
    		expect(mqOfflineDirective[0].restrict).toBe('E');
    	}));

    it('defines an inline template',
    	angular.mock.inject(function (mqOfflineDirective) {
    		expect(mqOfflineDirective[0].template).toBeDefined();
    	}));

    it('has set its replace property to true', 
    	angular.mock.inject(function (mqOfflineDirective) {
    		expect(mqOfflineDirective[0].replace).toBe(true);
    	}));
});