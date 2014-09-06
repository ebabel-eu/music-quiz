// Sync Facebook and Music Quiz account for the current gamer.
musicQuizApp.service('accountService', ['$rootScope', '$http', 

    function ($rootScope, $http) {
        'use strict';

        var postGamerDetailsToAccount,
            successCallback,
            errorCallback;

        successCallback = function (data, status, headers, config) {
            console.log('success ' + data);
            // todo: to implement.
        }

        errorCallback = function (data, status, headers, config) {
            console.log('error ' + data);
            // todo: to implement.
        }

        postGamerDetailsToAccount = function (gamer) {
            $http.post('/api/1.0.0/account', gamer)
                    .success(successCallback)
                    .error(errorCallback);
        }

        $rootScope.$on('setGamerDetailsEvent', function (event, gamer) {
            postGamerDetailsToAccount(gamer);
        });
    }
]);