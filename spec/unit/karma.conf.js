module.exports = function(config){
  config.set({

    basePath : '../../',

    files : [
    'js/angular.js',
    'js/angular-mock.js',
    'js/*.js',
    'spec/unit/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    logLevel : config.LOG_INFO,

    browsers : ['Chrome'],

    plugins : [
    'karma-chrome-launcher',
    'karma-firefox-launcher',
    'karma-spec-reporter',
    'karma-jasmine'
    ],

    junitReporter : {
      outputFile: 'unit.xml',
      suite: 'unit'
    },

    reporters: ['spec']

  });
};
