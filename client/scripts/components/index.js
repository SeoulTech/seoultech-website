var React = require('react'),
  $ = React.DOM,

  Router = require('react-router-component'),

  {Link, Location, Locations} = require('react-router-component'),

  BlogIndex = require('./blogIndex'),
  BlogItem = require('./blogItem'),
  EventsIndex = require('./eventsIndex'),
  EventsItem = require('./eventsItem'),
  AboutPage = require('./about'),

  _ = require('lodash'),
  get = require('../util/util').get,

  Index = React.createClass({
    getInitialState: function() {
      return JSON.parse(localStorage.getItem('state')) || {}
    },
    
    // FIXME: refactor cacheData
    cacheData: function(event) {
      var _state = _.cloneDeep(this.state, true),
        {component, id, data} = event.detail;

      if (id) {
        _state[component] = _state[component] || {};
        _state[component][id] = data
      } else {
        _state[component] = data
      }

      return _state
    },
    componentDidMount: function() {
      window.addEventListener('fetch',
        _.compose(this.setState.bind(this), this.cacheData), false)
    },
    render: function() {

      // FIXME: move following 3 lines somewhere else
      // to keep render side-effects free
      if (typeof localStorage != 'undefined') {
        localStorage.setItem('state', JSON.stringify(this.state))
      }

      return $.div(null, [
        Link({key: 'link-to-blog', href: '/'}, 'Blog'),
        Link({key: 'link-to-events', href: '/events/'}, 'Events'),
        Link({key: 'link-to-about', href: '/about/'}, 'About'),
        $.br(),
        $.img({
          src: 'client/images/banner.png', 
          alt: 'Seoul Tech Society',
          className: 'main--logo'
        }),

        
        // route configuration
        Locations({key: 'locations'},
          Location({key: 'blog', path: '/', handler: BlogIndex}),
          Location({key: 'blog-entry', path: '/blog/:year/:id', 
            handler: BlogItem}),
          Location({key: 'events', path: '/events/', handler: EventsIndex,
            data: get(this.state, 'events')}),
          Location({key: 'event', path: '/events/:id', handler: EventsItem,
            data: {
              'event': get(this.state, 'event'),
              'rsvp': get(this.state, 'people')
            }}),
          Location({key: 'about', path: '/about/', handler: AboutPage}))
      ])
    }
  })

React.renderComponent(Index(), document.querySelector('.container'))

module.exports = Index
