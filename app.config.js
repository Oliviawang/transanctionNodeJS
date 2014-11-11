/* globals requirejs */

requirejs.config({

    paths: {
        // 3rd party
        'jade': '/base/bower_components/jade/jade',
        'jquery': '/base/bower_components/jquery/dist/jquery.min',
        'jquery.spin':'/base/src/public/js/lib/spin/jquery.spin.min',
        'spin':'/base/src/public/js/lib/spin/spin.min',
        'lodash':'/base/bower_components/lodash/dist/lodash',
        'q':'/base/bower_components/q/q',
        'q-xhr':'/base/bower_components/q-xhr/q-xhr',
        'waypoints':'/base/bower_components/jquery-waypoints/waypoints.min'
    },
    map: {
        '*': {
            'css': '/base/bower_components/require-css/css.min.js'
        }
    },
    deps: ['jquery', 'jade'],
    shim: {

        'lodash' : {
            exports: '_'
        },
        'jquery.bootstrap': {
            deps: ['jquery']
        },
    },


});
