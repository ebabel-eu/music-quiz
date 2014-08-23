musicQuizApp.controller('mainController', ['$scope', '$location', 'notificationsService', 'loginService', 

    function ($scope, $location, notificationsService, loginService) {
        'use strict';

        $scope.$location = $location;
        $scope.notifications = notificationsService;
        $scope.login = loginService;

        $scope.nav = {
            greeting: 'Hello',
            name: 'Nadjib'
        };

        $scope.quizCoins = {
            // How many Quiz Coins the current gamer holds.
            balance: 11,

            // At what level does the system think the current game has too few Quiz Coins.
            danger: 3
        };

        window.fbAsyncInit = function() {
            FB.init({
                appId      : '319427958231932', // Current environment - todo: read from a config file that is accessible here.
                cookie     : true,  // enable cookies to allow the server to access the session
                xfbml      : true,  // parse social plugins on this page
                version    : 'v2.1' // use version 2.1
            });

            // Now that we've initialized the JavaScript SDK, we call FB.getLoginStatus().  This function gets the state of the
            // person visiting this page and can return one of three states to the callback you provide.  They can be:
            // 1. Logged into your app ('connected')
            // 2. Logged into Facebook, but not your app ('not_authorized')
            // 3. Not logged into Facebook and can't tell if they are logged into your app or not.
            // These three cases are handled in the callback function.

            FB.getLoginStatus(function (response) {
                $scope.login.statusChangeCallback(response);

                if (response.status === 'connected') {
                    // Logged into your app and Facebook.
                    $scope.notifications.add({
                        "type": "success",
                        "title": "You are logged in",
                        "message": "You can now play and win Music Coins."
                    });

                    // Test
                    this.getGamerDetails();
                    this.getFriendsWhoPlay();
                } else if (response.status === 'not_authorized') {
                    // The person is logged into Facebook, but not your app.
                    $scope.notifications.add({
                        "type": "info",
                        "title": "Authorize this game",
                        "message": "To play quizzes and win Music Coins, you first need to accept to play this game with your Facebook account."
                    });
                } else {
                    // The person is not logged into Facebook, so we're not sure if they are logged into this app or not.
                    $scope.notifications.add({
                        "type": "info",
                        "title": "Log into Facebook please",
                        "message": "To play and win Music Coins, you first need to log into your Facebook account."
                    });
                }

                // Update the scope to make sure notifications are displayed.
                $scope.$apply();
            });
        };
    }

]);