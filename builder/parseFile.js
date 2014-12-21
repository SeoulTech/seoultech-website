var fs = require('fs-extra')
var toMarkdown = require('marked')

var c = require('./config')
var siteUrl = c.home
var get = require(c.scriptDir + 'util').get

var imagePlaceholder = /\{\{images\}\}/g
var dateVal = /date:\s*(.*)/
var titleVal = /title:\s*(.*)/
var posterVal = /poster:\s*(.*)/
var isMarkdown = /^.+\.(md|markdown)$/
var secondParam = /\/(\w+)/
var filename = /^.+\/(.+).md|markdown$/

module.exports = function(file) {
  var content = fs.readFileSync(file, 'utf-8')
    .replace(imagePlaceholder, getPathToImages(file))

  var hasMetadata = /^---/.test(content)
  var date = extract(content, dateVal) || ''
  var title = extract(content, titleVal)
  var poster = extract(content, posterVal)
  var article = hasMetadata? content.split('---')[2] : content
  var path = getPath(file, date? '/' + date : date)
  
  
  return {
    id: changeDashesToSlashes(date) + '/' + extract(file, filename),
    path: path,
    filename: path + '.html',
    title: title,
    time: Date.parse(date),
    poster: poster,
    excerpt: toMarkdown(splitOnFold(article)[0] || ''),
    description: toMarkdown(splitOnFold(article).join(''))
  }
}

function extract(x, y) {return get(x.match(y), 1)}

function changeDashesToSlashes(x) {return x.replace(/-/g, '/')}

function splitOnFold(x) {return x? x.split('{{fold}}') : ''}

function getFileDir(x) {return x.split('/').slice(0, -1).join('/')}

function getPathToImages(x) {
  return siteUrl + getFileDir(x).replace('source', 'source/images')
}

function getPath(path, date) {
  return [
    '/',
    extract(path, secondParam),
    changeDashesToSlashes(date),
    '/',
    extract(path, filename)
  ].join('')
}
