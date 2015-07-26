module.exports = function(config) {
    config.set({
        frameworks: ['jasmine', 'browserify'],
        files: [
            '*.spec.js'
        ],
        preprocessors: {
            '*.spec.js': ['browserify']
        },
        browsers: ['PhantomJS']
    })
}
