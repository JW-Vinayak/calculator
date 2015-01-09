// conf.js
exports.config = {
  chromeOnly: true,

  baseUrl: 'http://localhost:8000/',

  framework: 'jasmine',
  specs: ['spec.js'],
  capabilities: {
    'browserName': 'chrome'
  }
}
