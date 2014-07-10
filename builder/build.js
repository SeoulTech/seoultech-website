// TODO: create directories that don't exist

var fs = require('fs'),
  convertDir = require('./parse'),
  mkdirp = require('mkdirp'),
  rimraf = require('rimraf'),

  inputDir = 'client/content/source/',
  outputDir = 'client/content/target/',

  isMarkdown = RegExp.prototype.test.bind(/^.+\.(md|markdown)$/),

  getFiles = function(dir) {
    return fs.readdirSync(dir).filter(isMarkdown).map(function(file) {
      return file.split('.').slice(0, -1).join('')
    })
  },

  getDirectories = function(dir) {
    return fs.readdirSync(dir).filter(function(file) {
      return fs.statSync(dir + file).isDirectory()
    })
  },

  getIndex = function(path, inputIndex, outputIndex) {
    inputIndex = inputIndex || {}
    outputIndex = outputIndex || {}
    // FIXME: factor out these filthy mutations
    getDirectories(path).forEach(function(dir) {
      var inputPath = path + dir + '/',
        outputPath = inputPath.replace('source', 'target')

      if (getFiles(path + dir + '/').length > 0) {
        inputIndex[inputPath] = getFiles(inputPath)
        outputIndex[outputPath] = getFiles(inputPath)
      }

      getIndex(inputPath, inputIndex, outputIndex)
    })

    return [inputIndex, outputIndex]
  },

  log = function(file, _) {
    console.log(file, '\x1b[32m', 'OK', '\x1b[39m')
  }

try {
  var index = getIndex(inputDir),
    inputIndex = index[0],
    outputIndex = index[1]

  fs.writeFileSync(outputDir + 'index.js',
    'export default ' + JSON.stringify(outputIndex))

  Object.keys(outputIndex).map(function(dir) {
    rimraf.sync(dir)
    mkdirp.sync(dir)
    return dir
  }).map(function(_, i) {
    return [Object.keys(inputIndex)[i], Object.keys(outputIndex)[i]]
  }).forEach(function(args) {
    convertDir.apply(null, args)
  })

  console.log('\x1b[32m' + 'Done', '\x1b[39m')
} catch (e) {
  console.error(e.stack)
  console.log('\x1b[31m', 'Conversion failed', '\x1b[39m')
}
