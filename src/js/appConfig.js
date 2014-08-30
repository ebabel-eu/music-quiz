musicQuizApp

        // Set a mapping between url routes and views.
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/', {templateUrl: 'views/home.html'})
                .when('/home', {templateUrl: 'views/home.html'})
                .when('/login', {templateUrl: 'views/login.html'})
                .when('/logout', {templateUrl: 'views/logout.html'})
                .when('/privacy-policy', {templateUrl: 'views/privacy-policy.html'})
                .when('/about-us', {templateUrl: 'views/about-us.html'})
                .when('/create-new-quiz', {templateUrl: 'views/create-new-quiz.html'})
                .when('/404', {templateUrl: 'views/404.html'})
                .otherwise({redirectTo: '/404'});
        }])

        // Make location data available to the web.
        .config(['$locationProvider', function ($locationProvider) {
            $locationProvider.html5Mode(false);
        }])

        // Make built in filters from AngularJS accessible.
        .config(['$filterProvider', function ($filterProvider) {}])

        .config(function(FacebookProvider) {
            // Set your appId through the setAppId method or
            // use the shortcut in the initialize method directly.
            FacebookProvider.init('319427958231932');
        });