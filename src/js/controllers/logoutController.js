musicQuizApp.controller('logoutController', ['$scope', '$window', '$q', 'loginService', 

    function ($scope, $window, $q, loginService) {
		'use strict';

        var asyncLogout;

        $scope.showResult = false;
        $scope.login = loginService;

        asyncLogout = function (timeoutDelay) {
            var deferred = $q.defer();

            setTimeout(function () {
                $scope.login.logout();
                deferred.resolve();
            }, timeoutDelay);

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