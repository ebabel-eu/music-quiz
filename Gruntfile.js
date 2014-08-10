// Concatenate and minify css and javascript files.
module.exports = function (grunt) {
    grunt.config.init({
        concat: {
            options: {
                separator: ';'
            },
            js: {
                files: {
                    './src/js/dependencies.concat.js' : [
                        './bower_components/angular/angular.js',
                        './bower_components/angular-mocks/angular-mocks.js',
                        './bower_components/angular-route/angular-route.js',
                        './bower_components/angular-bootstrap/ui-bootstrap.js',
                        './bower_components/angular-bootstrap/ui-bootstrap-tpls.js'
                    ],
                    './src/js/app.concat.js': [
                        'src/js/app.js',
                        'src/js/config.js',
                        'src/js/models/*.js',
                        'src/js/controllers/*.js'
                    ]
                }
            }
        },

        uglify: {
            options: {
                compress: false,
                preserveComments: false
            },
            js: {
                files: {
                    './dist/js/dependencies.min.js': [
                        './src/js/dependencies.concat.js'
                    ],
                    './dist/js/app.min.js': [
                        './src/js/app.concat.js'
                    ]
                }
            }
        },

        cssmin: {
            options: {
                keepSpecialComments: '0'
            },
            combine: {
                files: {
                    './dist/css/screen.min.css': [
                        './src/css/screen.css'
                    ],
                }
            }
        }

    });

    // Grunt plugins.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Register which tasks to run.
    grunt.registerTask('default', [
        'concat',
        'uglify', 
        'cssmin'
    ]);
};