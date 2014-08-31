module.exports = function(config) {
    config.set({
        basePath: '../',
        frameworks: ['jasmine'],
        files: [
            'src/js/dependencies.concat.js',
            'src/js/app.concat.js'
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