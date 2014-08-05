var React = require('react'),
  parse = require('marked'),
  fs = require('fs-extra'),
  fetch = require('http').get,
  readDir = require('./getFiles'),
  yaml = require('yamljs'),

  getUrl = require('../scripts/utilities/getUrl'),
  extract = require('../scripts/utilities/extract')
  homeComponent = require('../scripts/components/homeComponent'),
  staticComponent = require('../scripts/components/staticComponent'),
  eventsIndex = require('../scripts/components/eventsIndex'),
  blogIndex = require('../scripts/components/blogIndex'),
  blogPost = require('../scripts/components/blogPost'),

  c = require('./build.config'),
  url = c.url,
  reactCDN = c.reactCDN,
  scriptDir = c.scriptDir,
  nameOnly = /^.+\/(.+).md|markdown$/,
  nameFolder = /^.+\/(.+\/.+).md|markdown$/,

  staticConfig = {
    component: staticComponent,
    getProps: function(file) {return {html: file.description}},
    render: React.renderComponentToStaticMarkup
  },

  eventsConfig = {
    out: '/events/',
    fetch: fetch.bind(this, getUrl('events')),

    parent: {
      component: eventsIndex,
      getProps: function(context) {return context[eventsConfig.out]},
      render: React.renderComponentToString,
      externalScripts: '<script src="' + reactCDN + '"></script>' +
        '<script src="' + url + 'scripts/bundles/events.bundle.js"></script>'
    },

    child: staticConfig,

    makeLoader: function(context) {
      fs.writeFileSync(scriptDir + 'loaders/loaderEvents.js', [
        'var React = require(\'react\'),',
        'Wrapper = require(\'../components/wrapper\'),',
        'EventsIndex = require(\'../components/eventsIndex\')',
        'React.renderComponent(Wrapper({content: EventsIndex(' +
          JSON.stringify(this.parent.getProps(context)) +
        ')}), document.body)'
      ].join('\n'))
    }
  },

  blogConfig = {
    out: '/blog/',
    fetch: readDir.bind(this, 'blog', {
      getFilename: function(file) {return file.match(nameFolder)[1]}
    }),

    parent: {
      component: blogIndex,
      getProps: function(context) {return context[blogConfig.out]},
      render: React.renderComponentToStaticMarkup
    },

    child: {
      component: blogPost,
      getProps: function(file) {return file},
      render: React.renderComponentToStaticMarkup
    }
  },

  homeConfig = {
    out: '/',
    fetch: readDir.bind(this, 'pages', {
      getFilename: function(file) {return file.match(nameOnly)[1] + '/index'}
    }),

    parent: {
      component: homeComponent,
      getProps: function(context) {
        var config = require(__dirname + '/index.yml')

        return {
          config: config,
          events: extract(config.events, context['/events/'].results),
          blog: extract(config.blog, context['/blog/'].results),
          custom: {html: parse(config.custom)}
        }
      },
      render: React.renderComponentToString,
      externalScripts: '<script src="' + reactCDN + '"></script>' +
        '<script src="' + url + 'scripts/bundles/home.bundle.js"></script>'
    },

    child: staticConfig,

    makeLoader: function(context) {
      fs.writeFileSync(scriptDir + 'loaders/loaderHome.js', [
        'var React = require(\'react\'),',
        'Wrapper = require(\'../components/wrapper\'),',
        'HomeComponent = require(\'../components/homeComponent\')',
        'React.renderComponent(Wrapper({content: function(props) {',
        'return HomeComponent(props || ' +
          JSON.stringify(this.parent.getProps(context)) +
        ')}}), document.body)'
      ].join('\n'))
    }
  }

module.exports = [eventsConfig, blogConfig, homeConfig]
