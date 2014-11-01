var isMarkdown = RegExp.prototype.test.bind(/^.+\.(md|markdown)$/)

module.exports = function(rootDir) {
// default index structure: [top path, [contents]]
  var index = [[rootDir, []]]
  require('file').walkSync(rootDir, function(dir, dirs, files) {
    var markdownOnly = files.filter(isMarkdown)

    if (markdownOnly.length > 0) {
      index.push([dir, markdownOnly.map(normalizePath(dir))])
    }
  })

  return index.reduce(nestFolders)
}

function normalizePath(dir) {
  return function(file) {return dir.replace(/\/$/, '') + '/' + file}
}

function nestFolders(x, y) {return [x[0], x[1].concat([y])]}