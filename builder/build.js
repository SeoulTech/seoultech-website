var fs = require('fs-extra'),
  webpack = require('webpack'),
  webpackConfig = require('./webpack.config'),
  async = require('async'),
  _ = require('lodash'),
  concat = require('concat-stream'),
  htmlBoilerplate = require('./htmlBoilerplate'),
  routes = require('./routes'),

  wrapper = require('../scripts/components/wrapper'),
  c = require('./build.config'),
  outputDir = c.outputDir,

  placeholder = '<-- {{content}} !-->',
  resetColor = '\x1b[39m',
  blueColor = '\x1b[34m',
  greenColor = '\x1b[32m',
  redColor = '\x1b[31m',

  handleError = function(error) {
    console.error(error.stack)
    console.log(redColor + 'Conversion failed', resetColor)
  },

  writeFile = function(path, content) {
    fs.mkdirsSync(_.initial(path.split('/')).join('/'))
    fs.writeFileSync(path, content)
  },

  writeHTML = function(dir, file, config, context) {
    writeFile(dir + file + '.html', htmlBoilerplate.replace(placeholder,
      config.render(wrapper({
        content: config.component(config.getProps(context))})) +
      (config.externalScripts || '')))
  },

  getData = function(route, yield) {
    var data,
      writer = concat(function(buffer) {data = buffer.toString()})

    route.fetch(function(res) {res.pipe(writer)})
    writer.on('finish', function() {
      yield(null, _.omit(JSON.parse(data), 'meta'))})
  },

  makeParent = function(route, index, yield) {
    writeHTML(outputDir + route.out, 'index', route.parent, index)
    yield(null, route, index)
  },

  makeChildren = function(route, index, yield) {
    index[route.out].results.forEach(function(file) {
      writeHTML(outputDir + route.out, file.id, route.child, file)})
    yield(null, route, index)
  },

  makeLoader = function(route, index, yield) {
    if (route.makeLoader) route.makeLoader(index)
    yield(null, route)
  },

  makeBundle = function(route, yield) {
    webpack(webpackConfig, function(error) {
      if (error) handleError(error)
      else yield(null, route)
    })
  },

  done = function(route) {
    console.log(
      'route:', blueColor + route.out,
      greenColor + 'OK', resetColor)
  }

async.parallel(_.map(routes, function(route) {
  return _.partial(getData, route)
}), function(err, data) {
  var index = _.reduceRight(data.concat({}), function(result, value, i) {
    return Object.defineProperty(result, routes[i].out, {
      enumerable: true,
      value: value
    })
  })

  _.forEach(routes, function(route) {
    fs.removeSync(outputDir + route.out)

    async.seq(
      _.partial(makeParent, route, index),
      makeChildren,
      makeLoader,
      makeBundle,
      done
    )()
  })
})