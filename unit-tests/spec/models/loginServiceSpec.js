describe('The login service', function() {
        'use strict';

        beforeEach(angular.mock.module('musicQuizApp'));

        it('should have a gamer property which is initially an empty object', 
            angular.mock.inject(function (loginService) {
                expect(loginService.gamer).toEqual({});
            }));

        it('should be able to call its statusChangeCallback function with a response status of \'not_authorized\'',
            angular.mock.inject(function (loginService) {
                var response = { status: 'not_authorized' },
                    callback = function () {},
                    scope = null;

                expect(loginService.statusChangeCallback(response, callback, scope)).toBeDefined();
            }));

        it('should be able to call its statusChangeCallback function with a response status of \'connected\'',
            angular.mock.inject(function (loginService) {
                var response = { status: 'connected' },
                    callback = function () {},
                    scope = null;

                expect(loginService.statusChangeCallback(response, callback, scope)).toBeDefined();
            }));

        it('should have default notifications',
            angular.mock.inject(function (loginService) {
                expect(loginService.notifications).toBeDefined();
            }));

        it('should have a success default notification', 
            angular.mock.inject(function (loginService) {
                expect(loginService.notifications.success).toBeDefined();
            }));

        it('should have an authorizationRequired default notification', 
            angular.mock.inject(function (loginService) {
                expect(loginService.notifications.authorizationRequired).toBeDefined();
            }));

        it('should have an loginRequired default notification', 
            angular.mock.inject(function (loginService) {
                expect(loginService.notifications.loginRequired).toBeDefined();
            }));

        it('should be able to call its logout function', 
            angular.mock.inject(function (loginService) {
                expect(loginService.logout()).toBeDefined();
            }));

        it('should be able to call its login function',
            angular.mock.inject(function (loginService) {
                expect(loginService.login(function(){})).toBeDefined();
            }));
});