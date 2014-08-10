musicQuizApp

        // Set a mapping between url routes and views.
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/', {controller: 'mainController', templateUrl: 'views/signin.html'})
                .when('/signin', {controller: 'mainController', templateUrl: 'views/signin.html'})
                .when('/signup', {controller: 'mainController', templateUrl: 'views/signup.html'})
                .when('/decibel-account', {templateUrl: 'views/decibelAccount.html'})
                .when('/signin', {templateUrl: 'views/signinOrSignup.html'})
                .when('/404', {templateUrl: 'views/404.html'})
                .otherwise({redirectTo: '/404'});
        }])

        // Make location data available to the web.
        .config(['$locationProvider', function ($locationProvider) {
            $locationProvider.html5Mode(false);
        }])

        // Make built in filters from AngularJS accessible.
        .config(['$filterProvider', function ($filterProvider) {}]); 