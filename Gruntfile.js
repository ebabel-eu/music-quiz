// Concatenate and minify css and javascript files.
module.exports = function (grunt) {

    grunt.config.init({
        concat: {
            options: {
                separator: ';'
            },
            dependencies: {
                files: {
                    './src/js/dependencies.concat.js' : [
                        './bower_components/angular/angular.js',
                        './bower_components/angular-mocks/angular-mocks.js',
                        './bower_components/angular-route/angular-route.js',
                        './bower_components/angular-bootstrap/ui-bootstrap.js',
                        './bower_components/angular-bootstrap/ui-bootstrap-tpls.js'
                    ]
                }
            }
        }

    });

    // Grunt plugins.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');

    // Register which tasks to run.
    grunt.registerTask('default', [
        'concat',
        // 'uglify', 
        // 'cssmin',
        // 'clean'
    ]);
};