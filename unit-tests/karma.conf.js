module.exports = function(config) {
    config.set({
        basePath: '../',
        frameworks: ['jasmine'],
        files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'bower_components/angular-route/angular-route.js',
            'bower_components/angular-bootstrap/ui-bootstrap.js',
            'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
            'src/js/app.js',
            'src/js/config.js',
            'src/js/models/*.js',
            'src/js/controllers/*.js',
            'src/js/directives/*.js',
            'unit-tests/spec/**/*.js'
        ],
        exclude: [
            'unit-tests/spec/*_Exclude/*.js'
        ],
        browsers: ['PhantomJS'],
        autoWatch: true,
        preprocessors: { 'src/js/**/*.js': ['coverage'] },
        reporters: ['progress', 'coverage'],
        coverageReporter: {
            type: 'html',
            dir: 'unit-tests/coverage/'
        }
    });
};