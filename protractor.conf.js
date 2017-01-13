exports.config = {

  allScriptsTimeout: 11000,

  specs: [
    'test/*.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:4444/',
  chromeOnly: true,
  directConnect: true,

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }

};
