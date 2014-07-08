var React = require('react'),
  $ = React.DOM,
  Pages = require('../util/router'),

  BlogIndex = require('./blogIndex'),
  BlogItem = require('./blogItem'),
  EventsIndex = require('./eventsIndex'),
  EventsItem = require('./eventsItem'),
  AboutPage = require('./about'),

  _ = require('../util/util'),

  Index = React.createClass({
    getInitialState: function() {
      return {}
    },

    // FIXME: refactor cacheData
    cacheData: function(event) {
      var _state = _.cloneDeep(this.state, true),
        component = event.detail.component,
        id = event.detail.id,
        data = event.detail.data;
        // {component, id, data} = event.detail;

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
      return $.div(null, [
        $.a({key: 'link-to-blog', href: './#'}, 'Blog'),
        $.a({key: 'link-to-events', href: './#/events'}, 'Events'),
        $.a({key: 'link-to-about', href: './#/about'}, 'About'),
        $.br(),
        $.img({
          src: 'client/images/banner.png',
          alt: 'Seoul Tech Society',
          className: 'main--logo'
        }),
        Pages({
          '/': {handler: BlogIndex},
          '/blog/:year/:id': {handler: BlogItem},
          '/events': {handler: EventsIndex, data: _.get(this.state, 'events')},
          '/events/:id': {handler: EventsItem, data: {
            'event': _.get(this.state, 'event'),
            'rsvp': _.get(this.state, 'people')}},
          '/about': {handler: AboutPage}
        })
      ])
    }
  })

React.renderComponent(Index(), document.querySelector('.wrapper'))

module.exports = Index
