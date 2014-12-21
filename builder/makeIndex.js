// type Path = String
// type Filename = String
// type Dir = [Path, [Filename]]

// isMarkdown :: Filename -> Bool
var isMarkdown = RegExp.prototype.test.bind(/^.+\.(md|markdown)$/)

// normalizePath :: Path -> (Filename -> Path)
var normalizePath = function(dirPath) {
  return function(filename) {return dirPath.replace(/\/$/, '') + '/' + filename}
}

// nestFolders :: Dir -> Dir -> [Path, [Dir]]
var nestFolders = function(x, y) {return [x[0], x[1].concat([y])]}

// exclude :: [Path] -> [Path] -> [Path] 
var exclude = function(toExclude, routes) {
  return routes.filter(function(x) {
    return toExclude.reduce(function(y, z) {
      return x.indexOf(y) == -1 && x.indexOf(z) == -1 
    })
  }) 
}

// makeIndex :: Path -> [Path] -> {a: [Path]} -> {a: [Path], b: [Filename]}
module.exports = function makeIndex(rootDir, opts) {
  var routes = []
  var files = []

// makeIndexFlat :: Path -> [Filename] -> [Filename] -> Void
  require('file').walkSync(rootDir, function(dirPath, childDirs, childFiles) {
    routes.push(dirPath) 
    files.push(childFiles.filter(isMarkdown).map(normalizePath(dirPath)))
  })

  return {
    routes: exclude(opts.exclude, routes),
    files: [].concat.apply([], files)
  } 
}

