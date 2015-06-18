describe("The musicQuizApp module config location", function() {
    'use strict';

    var $location;

    beforeEach(angular.mock.module('musicQuizApp'));

    beforeEach(angular.mock.inject(function (_$location_) {
        $location = _$location_;
    }));

    it('should be able to read the current port', function() {
        expect($location.port()).toBe(80);
    });

});