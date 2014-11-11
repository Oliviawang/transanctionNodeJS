/**
 * @file Gruntfile
 * @copyright 2014 Cyan, Inc. All rights reserved.
 */

'use strict';
function notCli(task) {
    return task !== 'grunt-cli';
}
module.exports = function (grunt) {
    require('matchdep').filterDev('grunt-*').filter(notCli).forEach(grunt.loadNpmTasks);
    grunt.initConfig({
        jade: {


            'js': {
                options: {
                    pretty: true,
                    namespace: false,
                    client: true,
                    amd: true,
                },
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: ['public/**/*.jade', 'server/*/*.jade'],
                    dest: 'src',
                    ext: '.tmpl.js',
                }]
            }
        },
        less: {
            dev: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/public/css',
                        src: ['**/*.less'],
                        dest: 'src/public/css',
                        ext: '.css'
                    }
                ]
            }
        },
            karma: {
            unit: {
                configFile: 'karma/karma.config.js'
            }
        }
    });


    grunt.registerTask('build', ['jade:js', 'less:dev','test']);
    grunt.registerTask('test', ['karma:unit']);

};