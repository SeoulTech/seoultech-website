var fs = require('fs-extra')
var _ = require('lodash')
var hl = require('highland')
var React = require('react')

var compressor = require('node-minify')

var readDir = require('./getFiles')
var Routes = require('./routes')

var c = require('./config')
var url = c.url

var contentPlaceholder = '<!--{{content}}-->'
var urlPlaceholder = /\{\{home\}\}/g
var resetColor = '\x1b[39m'
var blueColor = '\x1b[34m'
var greenColor = '\x1b[32m'
var redColor = '\x1b[31m'
var siteTemplate = fs.readFileSync('./builder/siteTemplate.html', 'utf-8')
    .replace(urlPlaceholder, c.home)

var render = _.curry(function(c) {
  return {
    name: c.filename,
    data: hl(function(push) {push(null,
      siteTemplate.replace(
        contentPlaceholder,
        React.renderComponentToStaticMarkup(Routes(c, url))
      )
    )})
  }
})

var pipe = _.curry(function(pipeline, x) {return x.pipe(pipeline())})


returnArray(readDir(c.inputDir))
  .map(pipe(parseJSON))
  .map(function(s) {return s.map(makeComponents)})
  .reduce(concat)
  .errors(handleError)
  .toArray(function(xs) {
    minifyCSS()
    xs[0].forEach(function(x) {done(x.name)})
    console.log('Done')
  })

  function returnArray(x) {return [].slice.call(arguments)}

  function parseJSON() {
    return hl.pipeline(
      hl.map(function(x) {return x.toString()}),
      hl.reduce1(concat),
      hl.map(JSON.parse)
    )
  }

function minifyCSS() {
  new compressor.minify({
    type: 'clean-css',
    fileIn: __dirname + '/../ui/styles/style.css',
    fileOut: __dirname + '/../out/style.min.css',
    callback: function(err, min) {
      if (err) console.log(err)
      done('Minify CSS')
    }
  })
}

function done(route) {
  console.log(blueColor + route, greenColor + 'OK', resetColor)
}

function handleError(error, push) {
  console.log(redColor + 'Conversion failed', resetColor)
  push(error)
}


function rednerComponents(c) {
  return _.isArray(c)? c.map(rednerComponents) : render(c)
}

function writeFile(x) {
  fs.mkdirsSync(c.outputDir + x.name.split('/').slice(0, -1).join('/'))
  x.data.pipe(fs.createWriteStream(c.outputDir + x.name))
  // x.data.pipe(fs.createWriteStream(c.outputDir + x.name + '.html'))
  return x
}

function concat(x, y) {return x.concat(y)}

function makeComponents(data) {
  return _(data.results)
    .map(rednerComponents)
    .flatten()
    .map(writeFile)
    .value()
}


