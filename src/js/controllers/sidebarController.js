musicQuizApp.controller('sidebarController', ['$scope', 'notificationsService', 'loginService', 

    function ($scope, notificationsService, loginService) {
        'use strict';

        $scope.showSidebar = false;

        $scope.notifications = notificationsService;

        $scope.quizCoins = {
            // How many Quiz Coins the current gamer holds.
            balance: 11,

            // At what level does the system think the current game has too few Quiz Coins.
            danger: 3
        };

        $scope.greeting = 'Hello';

        $scope.login = loginService;

        $scope.online = navigator.onLine;

        // todo: improve the coupling of the code below. There is too much coupling and all this code doesn't below in a controller.
        window.fbAsyncInit = function() {
            if (!$scope.online) return;

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
            	var callback = function ($scope) {
	                // The sidebar has now been populated.
	                $scope.showSidebar = true;

	                // Update the scope to display the sidebar.
	                $scope.$apply();
            	};

                // Notifications to display.
                if (response.status === 'connected') {
                    // The gamer is logged into the app and Facebook.
                    $scope.notifications.add($scope.login.notifications.success);
                } else if (response.status === 'not_authorized') {
                    // The gamer is logged into Facebook, but not the app.
                    $scope.notifications.add($scope.login.notifications.authorizationRequired);
                } else {
                    // The gamer is not logged into Facebook, so we're not sure if he is logged into this app or not.
                    $scope.notifications.add($scope.login.notifications.loginRequired);
                }

                // Update the login service.
                $scope.login.statusChangeCallback(response, callback, $scope);
            });
        };
    }

]);