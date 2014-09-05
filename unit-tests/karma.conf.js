module.exports = function(config) {
    config.set({
        basePath: '../',
        frameworks: ['jasmine'],
        files: [
            // Client side dependencies.
            './bower_components/angular/angular.js',
            './bower_components/angular-mocks/angular-mocks.js',
            './bower_components/angular-route/angular-route.js',
            './bower_components/jquery/dist/jquery.js',
            './bower_components/bootstrap-sass/dist/js/bootstrap.js',
            './bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
            './bower_components/spin.js/spin.js',
            './bower_components/angular-spinner/angular-spinner.js',
            './bower_components/angular-facebook/lib/angular-facebook.js',

            // Application code.
            './src/client/js/app.js',
            './src/client/js/*Config.js',
            './src/client/js/models/*.js',
            './src/client/js/controllers/*.js',
            './src/client/js/directives/*.js',

            // Unit tests.
            './unit-tests/spec/**/*.js'
        ],
        exclude: [
            'unit-tests/spec/*_Exclude/*.js'
        ],
        browsers: ['PhantomJS'],
        autoWatch: true,
        preprocessors: { 'src/client/js/**/*.js': ['coverage'] },
        reporters: ['progress', 'coverage'],
        coverageReporter: {
            type: 'html',
            dir: 'unit-tests/coverage/'
        }
    });
};