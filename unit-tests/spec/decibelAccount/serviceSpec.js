describe("Service decibelAccountService", function() {
    'use strict';

    beforeEach(angular.mock.module('musicQuizApp'));

    it("has a property called applicationId", 
        angular.mock.inject(function (decibelAccountService) {
            expect(decibelAccountService.applicationId).toBeDefined();
        }));

    it("has a property called applicationKeys",
        angular.mock.inject(function (decibelAccountService) {
            expect(decibelAccountService.applicationKeys).toBeDefined();
        }));

});