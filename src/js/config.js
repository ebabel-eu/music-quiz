musicQuizApp

    // Set a mapping between url routes and views.
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {templateUrl: 'src/views/home.html'})
            .when('/decibel-account', {templateUrl: 'src/views/decibelAccount.html'})
            .otherwise({redirectTo: '/'});
    }])

    // Make location data available to the web.
    .config(['$locationProvider', function ($locationProvider) {
        $locationProvider.html5Mode(false);
    }])

    // Make built in filters from AngularJS accessible.
    .config(['$filterProvider', function ($filterProvider) {}]);