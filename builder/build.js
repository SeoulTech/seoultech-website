var fs = require('fs'),
  convertDir = require('./parse'),
  mkdirp = require('mkdirp'),
  rimraf = require('rimraf'),

  inputDir = 'client/content/source/',
  outputDir = 'client/content/target/',

  isMarkdown = RegExp.prototype.test.bind(/^.+\.(md|markdown)$/),

  getFiles = function(dir) {
    return fs.readdirSync(dir).filter(isMarkdown).map(function(file) {
      var filename = file.split('.').slice(0, -1).join(''),
        contents = fs.readFileSync(dir + file, 'utf-8'),
        date = contents.match(/date:(.*)/),
        title = contents.match(/title:(.*)/),
        tags = contents.match(/tags:(.*)/),
        replace = function(rs, ns, string) {return string.replace(rs, ns)}
      
      if (contents.match(/^---/)) {
        return {
          filename: filename,
          title: title? replace(/^\s/, '', title[1]) : '',
          date: date? replace(/^\s/, '', date[1]) : '',
          tags: tags? tags[1].split(',').map(replace.bind({}, /^\s/, '')) : []
        }
      }
      
      return {filename: filename}
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
        outputPath = inputPath.replace('source', 'target'),
        files = getFiles(inputPath)
      
      if (files.length > 0) {
        outputIndex[outputPath] = inputIndex[inputPath] = files
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
