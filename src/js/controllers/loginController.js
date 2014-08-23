musicQuizApp.controller('loginController', ['$scope', 
    function ($scope, $location) {
        'use strict';

        $scope.notifications.add({
            "type": "warning",
            "title": "Login doesn't fully work",
            "message": "We are currently experiencing issues with your login. Please bear with us."
        });


        // This is called with the results from from FB.getLoginStatus().
        $scope.statusChangeCallback = function (response) {
            console.log(response);
            // The response object is returned with a status field that lets the app know the current login status of the person.
            // Full docs on the response object can be found in the documentation for FB.getLoginStatus().
            if (response.status === 'connected') {
                // Logged into your app and Facebook.
                document.getElementById('status').innerHTML = 'You are logged in.';
                $scope.getGamerDetails();
                $scope.getFriendsWhoPlay();
            } else if (response.status === 'not_authorized') {
                // The person is logged into Facebook, but not your app.
                document.getElementById('status').innerHTML = 'Please log into this app.';
            } else {
                // The person is not logged into Facebook, so we're not sure if they are logged into this app or not.
                document.getElementById('status').innerHTML = 'Please log into Facebook.';
            }
        }

        // This function is called when someone finishes with the Login Button.  See the onlogin handler attached to it in the sample code below.
        $scope.checkLoginState = function() {
            FB.getLoginStatus(function(response) {
                $scope.statusChangeCallback(response);
            });
        }

        window.fbAsyncInit = function() {
            FB.init({
                appId      : '308221746019220',
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

            FB.getLoginStatus(function(response) {
                $scope.statusChangeCallback(response);
            });
        };

        // Load the SDK asynchronously
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

        // Get current gamer details.
        $scope.getGamerDetails = function() {
            FB.api("/v2.1/me?fields=name,first_name,last_name,email,picture,link,gender,locale,age_range", function(response) { 
                    if (response && !response.error) {
                        console.log(response);
                    }
                    // todo: handle error.
                }
            );
        }

        // List friends of current gamer who also play this game.
        $scope.getFriendsWhoPlay = function() {
            FB.api("/v2.1/me/friends",
                function (response) {
                    if (response && !response.error) {
                        console.log(response);
                    }
                    // todo: handle error.
                }
            );
        }


    }
]);