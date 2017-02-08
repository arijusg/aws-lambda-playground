var webpackConfig = require('./webpack.config');

module.exports = function(config) {  
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: ['test/**/*.test.ts'],
    preprocessors: {
      'test/**/*.ts': ['webpack']
    },
    webpack: {
      module: webpackConfig.module,
      resolve: webpackConfig.resolve
    },
    reporters: ['progress'],
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['PhantomJS'],
    singleRun: true
  });
}