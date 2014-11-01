var fs = require('fs-extra')
var _ = require('lodash')
var fsmonitor = require('fsmonitor')

var express = require('express')
var app = express()
var io = require('socket.io')
var get = require('http').get

var React = require('react')
var routes = require('./routes')
var parseFile = require('./parseFile')
var makeIndex = require('./makeIndex')

var lastUrl = ''
var sourceDir = './source/'
var assetsDir = '.'
var stylesDir = './ui/'

var urlPlaceholder = /\{\{home\}\}/g
var contentPlaceholder = '<!--{{content}}-->'
var siteTemplate = fs.readFileSync('./builder/siteTemplate.html', 'utf-8')
  .replace(urlPlaceholder, '/../')
  .replace('</body>', [
    '<script src="/socket.io/socket.io.js"></script>',
    '<script>',
    'var socket = io()',
    'socket.on("reload", function(data) {',
    'document.body.innerHTML = data',
    '})',
    'socket.on("css", function() {',
    'var link = [].filter.call(document.querySelectorAll("link"),',
    'function(x) {return x.href.match(/style.css/)})[0]',
    'newLink = document.createElement("link")',
    'newLink.rel = "stylesheet"',
    'newLink.href = link.href',
    'link.parentElement.insertBefore(newLink, link.nextSibling)',
    'window.setTimeout(',
    'function() {link.parentElement.removeChild(link)}, 200)',
    '})',
    '</script>',
    '</body>'
  ].join('\n'))

// for banner page and styles
app.use(express.static(assetsDir))


/* routes */

app.get('/', function(req, res) {
  cacheRequestUrl(req.url)
  res.send(render({data: [
    ['_'].concat([getFiles(sourceDir + 'events')]),
    ['_'].concat([getFiles(sourceDir + 'news')])
  ]}))
})

app.get('/news', function (req, res) {
  cacheRequestUrl(req.url)
  res.send(render({data: getFiles(sourceDir + 'news')}))
})

app.get('/news/*/*/*/*', function (req, res) {
  cacheRequestUrl(req.url)
  res.send(render(getFile(sourceDir + 'news', '/news/'))
  )
})

app.get('/events', function (req, res) {
  cacheRequestUrl(req.url)
  res.send(render({data: getFiles(sourceDir + 'events')}))
})


app.get('/events/*/*/*/*', function (req, res) {
  cacheRequestUrl(req.url)
  res.send(render(getFile(sourceDir + 'events', '/events/'))
  )
})

app.get('/about', function (req, res) {
  cacheRequestUrl(req.url)
  res.send(render(parseFile(sourceDir + 'pages/about.md')))
})

/* routes end here */



function cacheRequestUrl(url) {
  lastUrl = (url == '/')? '/' : url.replace(/\/$/, '')
}

function getFiles(path) {
  return _.flatten(makeIndex(path))
    .filter(function(x) {return /\.md$/.test(x)})
    .map(parseFile)
}

function getFile(path, route) {
  return getFiles(path).filter(function(x) {
    return x.id == lastUrl.replace(route, '').replace('.html', '')
  })[0]
}

function render(data) {
  return siteTemplate.replace(
    contentPlaceholder,
    React.renderComponentToStaticMarkup(
      routes(
        Object.defineProperty(
          data, 'path', {value: lastUrl, enumerable: true}
        ),
        '/'
      )
    )
  )
}



var server = app.listen(8080, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('dev server at http://%s:%s', host, port)

  io(server).on('connection', function(socket) {

    fsmonitor.watch(sourceDir, null, function() {
      get('http://' + host + ':' + port + lastUrl, function(res) {
        res.on('data', function(data) {
          socket.emit(
            'reload',
            data.toString().match(/<body>([\s\S]*?)<\/body>/)[1]
          )
        })
      })
    })

    fsmonitor.watch(stylesDir, null, function() {
      get('http://' + host + ':' + port + lastUrl, function(res) {
        res.on('data', function(data) {
          socket.emit('css')
        })
      })
    })
  })
})


