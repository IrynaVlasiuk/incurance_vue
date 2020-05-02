require('./check-versions')()

process.env.NODE_ENV = 'production'

var rm = require('rimraf')
var path = require('path')
var webpack = require('webpack')
var config = require('../config')
var webpackConfig = require('./webpack.prod.conf')


rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, function (err, stats) {

    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: true,
      chunkModules: true
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(('  Build failed.\n'))
      process.exit(1)
    }

    console.log(('  Build complete.\n'))
  })
})
