describe('Service loginService', function() {
    'use strict';

    beforeEach(angular.mock.module('musicQuizApp'));

    it('has a property gamer which is initially an empty object', 
        angular.mock.inject(function (loginService) {
            expect(loginService.gamer).toEqual({});
        }));

    it('has a property friends which is initially an empty object', 
        angular.mock.inject(function (loginService) {
            expect(loginService.friends).toEqual({});
        }));

    it('has a triggerLogin function defined', 
        angular.mock.inject(function (loginService) {
            expect(loginService.triggerLogin).toBeDefined();
        }));
});