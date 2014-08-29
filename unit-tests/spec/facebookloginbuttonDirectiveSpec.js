describe('The mqFacebookloginbutton directive', function() {
    'use strict';

    beforeEach(angular.mock.module('musicQuizApp'));

    it('is defined', 
        angular.mock.inject(function (mqFacebookloginbuttonDirective) {
            expect(mqFacebookloginbuttonDirective).toBeDefined();
        }));
 
    it('is restricted to elements', 
    	angular.mock.inject(function (mqFacebookloginbuttonDirective) {
    		expect(mqFacebookloginbuttonDirective[0].restrict).toBe('E');
    	}));

    it('defines an inline template',
    	angular.mock.inject(function (mqFacebookloginbuttonDirective) {
    		expect(mqFacebookloginbuttonDirective[0].template).toBeDefined();
    	}));

    it('has set its replace property to true', 
    	angular.mock.inject(function (mqFacebookloginbuttonDirective) {
    		expect(mqFacebookloginbuttonDirective[0].replace).toBe(true);
    	}));
});
