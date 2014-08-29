describe('Service loginService', function() {
    'use strict';

    beforeEach(angular.mock.module('musicQuizApp'));

    it('has a property gamer which is initially an empty object', 
        angular.mock.inject(function (loginService) {
            expect(loginService.gamer).toEqual({});
        }));


});