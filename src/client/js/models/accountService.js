// Sync Facebook and Music Quiz account for the current gamer.
musicQuizApp.service('accountService', ['$rootScope', '$http', 'accountFactory', 

    function ($rootScope, $http, accountFactory) {
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

            // todo: use accountFactory instead of $http. See O'Reily book in location 3744.
            // todo: consider doing an update if the record already exists.

            $http.post('/api/1.0.0/account', gamer)
                    .success(successCallback)
                    .error(errorCallback);
        }

        $rootScope.$on('setGamerDetailsEvent', function (event, gamer) {
            postGamerDetailsToAccount(gamer);
        });
    }
]);