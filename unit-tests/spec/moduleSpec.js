describe("Module musicQuizApp", function() {
    'use strict';

    beforeEach(angular.mock.module('musicQuizApp'));

    it('is defined', function() {
        expect(musicQuizApp).toBeDefined();
    });

    it('has the correct name', function() {
        expect(musicQuizApp.name).toBe('musicQuizApp');
    });

});