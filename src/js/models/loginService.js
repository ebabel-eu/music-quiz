// Handle Facebook logins for the current gamer.
musicQuizApp.service('loginService', [

    function (notificationsService) {
        'use strict';

        // This is called with the results from from FB.getLoginStatus().
        this.statusChangeCallback = function (response) {
            console.log(response);
            // The response object is returned with a status field that lets the app know the current login status of the person.
            // Full docs on the response object can be found in the documentation for FB.getLoginStatus().
            if (response.status === 'connected') {
                // Logged into your app and Facebook.

                // Test
                this.getGamerDetails();
                this.getFriendsWhoPlay();
            } else if (response.status === 'not_authorized') {
                // The person is logged into Facebook, but not your app.
            } else {
                // The person is not logged into Facebook, so we're not sure if they are logged into this app or not.
            }
        }

        // This function is called when someone finishes with the Login Button.  See the onlogin handler attached to it in the sample code below.
        this.checkLoginState = function() {
            FB.getLoginStatus(function(response) {
                this.statusChangeCallback(response);
            });
        }

        // Get current gamer details.
        this.getGamerDetails = function() {
            FB.api("/v2.1/me?fields=name,first_name,last_name,email,picture,link,gender,locale,age_range", function(response) { 
                    if (response && !response.error) {
                        console.log(response);
                    }
                    // todo: handle error.
                }
            );
        }

        // List friends of current gamer who also play this game.
        this.getFriendsWhoPlay = function() {
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