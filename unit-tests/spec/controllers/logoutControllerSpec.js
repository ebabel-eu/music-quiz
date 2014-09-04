describe('The logout controller', function() {
    'use strict';

    var ctrl, $scope, $window;

    beforeEach(angular.mock.module('musicQuizApp'));

    // Mock $window otherwise the test will complain the page is being reloaded.
	beforeEach( module( function($provide) {
        $window = { 
            // now, $window.location.path will update that empty object
            location: {}, 
            // we keep the reference to window.document
            document: window.document
        };

        // We register our new $window instead of the old
        $provide.constant( '$window' , $window );
    }))

    beforeEach(angular.mock.inject(function ($rootScope, $controller, $window) {
        $scope = $rootScope.$new();

        ctrl = $controller('logoutController',
            {
                $scope: $scope
            });
    }));

    it('should be defined', function() {
        expect(ctrl).toBeDefined();
    });

    it('should be able to call the promised function', function() {
    	$scope.promised();
    	expect($window.location.href).toBe('/');
    });

    it('should be able to call the timeoutCallback function', function() {
    	var result = $scope.timeoutCallback();
    	expect(result).not.toBe(undefined);
    });

});