var stream = require('stream').Readable()
var _ = require('lodash')

var c = require('./config')
var makeIndex = require('./makeIndex')
var parseFile = require('./parseFile')

module.exports = function(dir) {

  var index = makeIndex(dir, {exclude: ['images', 'pages']})

  var files = _.map(
    index.files, 
    _.compose(handleExceptions, parseFile)
  )  

  var routes = _.map(index.routes, function(x) {
    var route = normalize(x, 'source')
    
    return _.extend(route, {
      data: _.filter(files, function(y) {
        return _.contains(y.path, route.path)
      })
    })
  })

  stream.push(JSON.stringify({results: _.flatten([routes, files])}))

  stream.push(null)

  return stream
}

function handleExceptions(x) {
  if (_.contains(x.path, '/pages')) {
    return _.extend(x, normalize(x.path, '/pages'))
  }

  return x
}

function normalize(x, y) {
  var x = x.replace(y, '')

  return {
    path: x,
    filename: x + '/index.html'
  }
}

