musicQuizApp.controller('logoutController', ['$scope', '$window', '$q', 'loginService', 

    function ($scope, $window, $q, loginService) {
		'use strict';

        var asyncLogout,
            timeoutCallback,
            deferred = $q.defer();

        $scope.showResult = false;
        $scope.login = loginService;

        $scope.timeoutCallback = function () {
            $scope.login.logout();
            
            deferred.resolve();

            return deferred;
        }

        asyncLogout = function (timeoutDelay) {
            setTimeout($scope.timeoutCallback, timeoutDelay);

            return deferred.promise;
        }

        $scope.promise = asyncLogout(1000);

        $scope.promised = function () {
            $scope.showResult = true;
            $window.location.href = '/';
        }

        $scope.promise.then($scope.promised);
    }

]);