var fs = require('fs-extra'),
  readable = require('stream').Readable,
  buildConfig = require('./build.config'),
  inputDir = buildConfig.inputDir,
  siteUrl = buildConfig.url,
  siteSource = buildConfig.siteSource,
  markdown = require('marked'),
  walkSync = require('file').walkSync,
  _ = require('../scripts/utilities/util')

module.exports = function(dir, config, callback) {
  var stream = readable(),
    isMarkdown = RegExp.prototype.test.bind(/^.+\.(md|markdown)$/),
    flatten = function(arr) {return [].concat.apply([], arr)},
    index = {}

  walkSync(inputDir + dir + '/', function(dir, dirs, files) {
    index[dir] = files.filter(isMarkdown)
      .map(function(file) {return dir.replace(/\/$/, '') + '/' + file})})

  stream.push(JSON.stringify({
    results: flatten(Object.keys(index).map(function(dir) {return index[dir]}))
      .map(function(file, i, files) {
        var trimSpace = function(s) {return s? s.replace(/^\s/, '') : ''},
          getPathToImages = function(file) {
            return siteUrl + file.split('/').slice(0, -1).join('/')
              .replace('source', 'source/images')},

          content = fs.readFileSync(file, 'utf-8')
            .replace(/\{\{images\}\}/g, getPathToImages(file)),
          hasMetadata = /^---/.test(content),

          date = _.get(content.match(/date:(.*)/), 1),
          title = '#' + trimSpace(_.get(content.match(/title:(.*)/), 1)),
          tags = _.get(content.match(/tags:(.*)/), 1),
          body = content.split('---')[2]

        return {
          id: config.getFilename(file),
          title: title.slice(1),
          date: trimSpace(date),
          tags: tags? tags.split(',').map(trimSpace) : [],
          description: markdown(hasMetadata? title + body : content)}})}))

  stream.push(null)
  callback(stream)
}