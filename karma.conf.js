module.exports = function (config) {
  config.set({
    frameworks: ['qunit', 'source-map-support'],
    reporters: ['spec'],
    preprocessors: {
      'test/qunit/**/*.js': ['babel', 'sourcemap']
    },
    files: [
      'node_modules/promise-polyfill/dist/polyfill.min.js',
      'node_modules/jquery/dist/jquery.min.js',
      'dist/sweetalert2.css',
      'dist/sweetalert2.js',
      'test/qunit/**/*.js'
    ],
    babelPreprocessor: {
      options: {
        sourceMap: 'inline'
      },
      filename: file => file.originalPath.replace(/\.js$/, '.es5.js'),
      sourceFileName: file => file.originalPath
    },
    plugins: [
      'karma-qunit',
      'karma-spec-reporter',
      'karma-babel-preprocessor',
      'karma-source-map-support',
      'karma-sourcemap-loader',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-ie-launcher'
    ]
  })
}
