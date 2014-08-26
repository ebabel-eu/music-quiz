musicQuizApp.controller('mainController', ['$scope', '$location', 'notificationsService', 'loginService', 

    function ($scope, $location, notificationsService, loginService) {
        'use strict';

        $scope.$location = $location;
        $scope.notifications = notificationsService;
        $scope.login = loginService;

        $scope.nav = {
            greeting: 'Hello'
        };

        $scope.quizCoins = {
            // How many Quiz Coins the current gamer holds.
            balance: 11,

            // At what level does the system think the current game has too few Quiz Coins.
            danger: 3
        };

        // todo: improve the coupling of the code below. There is too much coupling and all this code doesn't below in a controller.
        window.fbAsyncInit = function() {
            FB.init({
                appId      : '319427958231932', // Current environment - todo: read from a config file that is accessible here.
                cookie     : true,  // enable cookies to allow the server to access the session
                xfbml      : true,  // parse social plugins on this page
                version    : 'v2.1' // use version 2.1
            });

            // Get the state of the gamer visiting this page and return:
            //      1. Logged into your app ('connected')
            //      2. Logged into Facebook, but not your app ('not_authorized')
            //      3. Not logged into Facebook and can't tell if they are logged into your app or not.
            FB.getLoginStatus(function (response) {
                $scope.login.statusChangeCallback(response);

                if (response.status === 'connected') {
                    // Logged into your app and Facebook.
                    $scope.notifications.add($scope.login.notifications.success);
                } else if (response.status === 'not_authorized') {
                    // The person is logged into Facebook, but not your app.
                    $scope.notifications.add($scope.login.notifications.authorizationRequired);
                } else {
                    // The person is not logged into Facebook, so we're not sure if they are logged into this app or not.
                    $scope.notifications.add($scope.login.notifications.loginRequired);
                }

                // Update the scope to make sure notifications are displayed.
                $scope.$apply();
            });
        };
    }

]);