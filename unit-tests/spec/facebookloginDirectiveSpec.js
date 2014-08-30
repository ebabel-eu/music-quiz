describe('The mqFacebooklogin directive', function() {
    'use strict';

    beforeEach(angular.mock.module('musicQuizApp'));

    it('is defined', 
        angular.mock.inject(function (mqFacebookloginDirective) {
            expect(mqFacebookloginDirective).toBeDefined();
        }));
 
    it('is restricted to elements', 
    	angular.mock.inject(function (mqFacebookloginDirective) {
    		expect(mqFacebookloginDirective[0].restrict).toBe('E');
    	}));

    it('defines an inline template',
    	angular.mock.inject(function (mqFacebookloginDirective) {
    		expect(mqFacebookloginDirective[0].template).toBeDefined();
    	}));

    it('has set its replace property to true', 
    	angular.mock.inject(function (mqFacebookloginDirective) {
    		expect(mqFacebookloginDirective[0].replace).toBe(true);
    	}));
});
