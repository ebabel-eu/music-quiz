describe('The mqOffline directive', function() {
    'use strict';

    beforeEach(angular.mock.module('musicQuizApp'));

    it('is defined', 
        angular.mock.inject(function (mqOfflineDirective) {
            expect(mqOfflineDirective).toBeDefined();
        }));


});