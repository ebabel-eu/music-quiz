describe('The sidebar controller', function() {
    'use strict';

    var ctrl, $scope;

    beforeEach(angular.mock.module('musicQuizApp'));

    beforeEach(angular.mock.inject(function($rootScope, $controller) {
        $scope = $rootScope.$new();

        ctrl = $controller('sidebarController',
            {
                $scope: $scope
            });
    }));

    it('should be defined', function() {
        expect(ctrl).toBeDefined();
    });

    it('should have a scope', function() {
        expect($scope).toBeDefined();
    });

    it('should set showSidebarLoading to true by default', function() {
        expect($scope.showSidebarLoading).toBe(true);
    });

    it('should set showSidebar to false by default', function() {
        expect($scope.showSidebar).toBe(false);
    });

    // todo: try adding a jasmine spy to fake the Facebook object.

});