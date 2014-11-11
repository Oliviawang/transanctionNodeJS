var allTestFiles = [];
var TEST_REGEXP = /(spec)\.js$/i;

Object.keys(window.__karma__.files).forEach(function(file) {
    if (TEST_REGEXP.test(file)) {
        // Normalize paths to RequireJS module names.
        allTestFiles.push(file);
    }
});

// load common app config then override
requirejs(['/base/app.config.js'], function () {
    requirejs.config({
        // Karma serves files under /base, which is the basePath from your config file
        baseUrl: '/base/src/public/js',
        // dynamically load all test files
        deps: allTestFiles,

        // we have to kickoff jasmine, as it is asynchronous
        callback: window.__karma__.start
    });
});

