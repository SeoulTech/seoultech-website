var fs = require('fs-extra')
var stream = require('stream').Readable()
var c = require('./config')
var siteUrl = c.home
var toMarkdown = require('marked')
var get = require(c.scriptDir + 'util').get
var _ = require('lodash')
var makeIndex = require('./makeIndex')

var secondParam = /\/(\w+)/
var imagePlaceholder = /\{\{images\}\}/g
var dateVal = /date:\s*(.*)/
var titleVal = /title:\s*(.*)/
var posterVal = /poster:\s*(.*)/
var filename = /^.+\/(.+).md|markdown$/
var isMarkdown = /^.+\.(md|markdown)$/

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

function changeDashesToSlashes(x) {return x.replace(/-/g, '/')}

function getFileDir(x) {return x.split('/').slice(0, -1).join('/')}

function getPathToImages(x) {
  return siteUrl + getFileDir(x).replace('source', 'source/images')
}

function splitOnFold(x) {return x? x.split('{{fold}}') : ''}

function getPath(path, date) {
  return [
    '/',
    extract(path, secondParam),
    changeDashesToSlashes(date),
    '/',
    extract(path, filename)
  ].join('')
}

function parseFile(file) {
  var content = fs.readFileSync(file, 'utf-8')
    .replace(imagePlaceholder, getPathToImages(file))

  var hasMetadata = /^---/.test(content)

  var date = extract(content, dateVal) || ''
  var title = extract(content, titleVal)
  var poster = extract(content, posterVal)
  var article = hasMetadata? content.split('---')[2] : content

  return {
    id: changeDashesToSlashes(date) + '/' + extract(file, filename),
    path: getPath(file, date? '/' + date : date),
    filename: getPath(file, date? '/' + date : date),
    title: title,
    time: date,
    poster: poster,
    excerpt: toMarkdown(splitOnFold(article)[0] || ''),
    description: toMarkdown(splitOnFold(article).join(''))
  }
}

function normalizeRouteName(x) {
  return '/'.concat(extract(x, secondParam) || '')
}

function isFile(x) {return filename.test(x)}

function mergeDirs(y, z) {return [y[0], y[1].concat(z[1])]}

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