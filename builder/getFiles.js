var stream = require('stream').Readable()
var c = require('./config')
var get = require(c.scriptDir + 'util').get
var _ = require('lodash')
var makeIndex = require('./makeIndex')
var parseFile = require('./parseFile')

var filename = /^.+\/(.+).md|markdown$/
var secondParam = /\/(\w+)/
var samePath = _.curry(function(y, z) {return y == z[0]})

module.exports = function(dir) {
  stream.push(JSON.stringify({
    results: handleDir(
      makeIndex(c.inputDir + dir)
        .map(normalizeDir)
        .map(function(x, i) {return (i == 0)? x : mergeDuplicateRoutes(x)})
      )
  }))

  stream.push(null)

  return stream
}


function extract(x, y) {return get(x.match(y), 1)}

function isFile(x) {return filename.test(x)}

function mergeDirs(y, z) {return [y[0], y[1].concat(z[1])]}

function normalizeRouteName(x) {
  return '/'.concat(extract(x, secondParam) || '')
}

function handlePages(x) {
  x.path = x.id
  x.filename = x.id + '/index'
  return x
}

function addRouteMetadata(x) {
  return [
    {
      path: x[0],
      filename: (x[0] + '/index').replace(/\/\//g, '/'),
      data: x[1]
    },
    handleDir(x[1])
  ]
}

function handleDir(dir) {
  return (
    (dir[0] == '/pages')? _.map(dir[1], handlePages)
    :
    _.isString(dir[0])? addRouteMetadata(dir)
    :
    _.isArray(dir[0])? _.map(dir, handleDir)
    :
    dir
  )
}

function normalizeDir(x) {
  return (
    _.isArray(x)? _.map(x, normalizeDir)
    :
    isFile(x)? parseFile(x)
    :
    normalizeRouteName(x)
  )
}

function mergeDuplicateRoutes(x) {
  return _(x)
// remove duplicate route names
    .map(function(y) {return y[0]}).uniq()
// merge duplicate routes data
    .map(function(y) {return x.filter(samePath(y)).reduce(mergeDirs)})
    .value()
}