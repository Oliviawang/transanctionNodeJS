var common = require('./karma-common.config.js');

module.exports = function (config) {
    common(config);

    config.set({
        browsers: ['Chrome'],
        singleRun: false
    });
};
