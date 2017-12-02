var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'


const tsLoaders = {
  ts: [
    'babel-loader',
    {
      loader: 'tslint-loader',
      options: require('./tslint.conf')
    },
    {
      loader: 'ts-loader',
      options: {
        happyPackMode: true
      }
    }
  ]
}

const cssLoaders = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction ?
      config.build.productionSourceMap : config.dev.cssSourceMap,
    extract: isProduction
  })
}

module.exports = {
  loaders: Object.assign({}, cssLoaders, tsLoaders)
}