// Handle Facebook logins for the current gamer.
musicQuizApp.service('loginService', [

    function (notificationsService) {
        'use strict';

        var getGamerDetails,
            getFriendsWhoPlay,
            that = this;

        this.gamer = {};
        this.friends = {};
        this.showLogin = false;
        this.showLogout = false;

        // Get current gamer details.
        getGamerDetails = function(callback, $scope) {
            FB.api("/v2.1/me?fields=name,first_name,last_name,email,picture,link,gender,locale,age_range", function (response) { 
                    if (response && !response.error) {
                        that.gamer = response;
                    }

                    if (response && response.error) {
                        // todo: what's the best way to handle this error? A notification?
                        console.log(response.error);
                    }

                    callback($scope);
                }
            );
        }

        this.triggerLogin = function () {
            FB.login(function(response) {
               // handle the response
            }, {scope: 'public_profile,email'});
        }

        // This is called with the results from from FB.getLoginStatus().
        this.statusChangeCallback = function (response, callback, $scope) {
            // The response object is returned with a status field that lets the app know the current login status of the person.
            // Full docs on the response object can be found in the documentation for FB.getLoginStatus().
            if (response.status === 'connected') {
                // Logged into your app and Facebook.
                this.gamer = getGamerDetails(callback, $scope);
                this.showLogout = true;
                return this.gamer;
            } else if (response.status === 'not_authorized') {
                // The person is logged into Facebook, but not your app.
                this.showLogin = true;
            } else {
                // The person is not logged into Facebook, so we're not sure if they are logged into this app or not.
                this.showLogin = true;
            }

            callback($scope);
        }

        // This function is called when someone finishes with the Login Button.  See the onlogin handler attached to it in the sample code below.
        this.checkLoginState = function() {
            FB.getLoginStatus(function(response) {
                this.statusChangeCallback(response);
            });
        }

        // Standard notifications related to login operations.
        this.notifications = {
            success: {
                "type": "success",
                "title": "You are logged in",
                "message": "You can play Music Quiz and win Quiz Coins."
            },
            authorizationRequired: {
                "type": "info",
                "title": "Authorize this game",
                "message": "To play Music Quiz and win Music Coins, you first need to accept to play this game with your Facebook account."
            },
            loginRequired: {
                "type": "warning",
                "title": "Log into Facebook please",
                "message": "To play Music Quiz and win Music Coins, you first need to log into your Facebook account."
            }
        }

        // Logout the Facebook session of the current gamer.
        this.logout = function () {
            FB.logout();
        }
    }
]);