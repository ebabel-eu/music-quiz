describe("The musicQuizApp module config filter", function() {
    'use strict';

    var $filter;

    beforeEach(angular.mock.module('musicQuizApp'));

    beforeEach(angular.mock.inject(function (_$filter_) {
        $filter = _$filter_;
    }));

    it('should be able to format a number into a text with 2 decimals', function() {
        expect($filter('number')(Math.PI, 2)).toBe('3.14');
    });

});