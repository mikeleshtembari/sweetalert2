module.exports = function (config) {
  config.set({
    frameworks: ['qunit'],
    reporters: ['spec'],
    preprocessors: {
      'test/qunit/**/*.js': ['babel']
    },
    files: [
      'node_modules/promise-polyfill/dist/polyfill.min.js',
      'node_modules/jquery/dist/jquery.min.js',
      'dist/sweetalert2.css',
      'dist/sweetalert2.js',
      'test/qunit/**/*.js'
    ],
    plugins: [
      'karma-qunit',
      'karma-spec-reporter',
      'karma-babel-preprocessor',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-ie-launcher'
    ]
  })
}
