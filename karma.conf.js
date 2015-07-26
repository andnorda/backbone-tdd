module.exports = function(config) {
    config.set({
        frameworks: ['jasmine', 'browserify', 'sinon'],
        files: [
            '*.spec.js'
        ],
        preprocessors: {
            '*.spec.js': ['browserify']
        },
        browsers: ['PhantomJS']
    })
}
