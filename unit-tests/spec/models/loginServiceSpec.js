describe('The login service', function() {
    'use strict';

    beforeEach(angular.mock.module('musicQuizApp'));

    it('has a property gamer which is initially an empty object', 
        angular.mock.inject(function (loginService) {
            expect(loginService.gamer).toEqual({});
        }));

    // it('has a function statusChangeCallback',
    // 	angular.mock.inject(function (loginService) {
    // 		expect(loginService.statusChangeCallback).toBeDefined();
    // 	}));
});