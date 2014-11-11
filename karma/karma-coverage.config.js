var common = require('./karma-common.config.js');

module.exports = function (config) {
    common(config);

    config.set({
        // coverage reporter generates the coverage
        reporters: ['progress', 'coverage'],

        preprocessors: {
            // source files, that you wanna generate coverage for
            // do not include tests or libraries
            // (these files will be instrumented by Istanbul)
            'src/**/*.js': ['coverage']
        },

        // optionally, configure the reporter
        coverageReporter: {
            reporters: [
                {
                    type : 'text-summary'
                },
                {
                    type: 'html',
                    dir: 'coverage'
                }
            ]
        }
    });
};
