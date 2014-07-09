module _ from '../util/util';
import {renderComponent, createClass, DOM} from 'react';

const Pages = require('../util/router'),
  BlogIndex = require('./blogIndex'),
  BlogItem = require('./blogItem'),
  EventsIndex = require('./eventsIndex'),
  EventsItem = require('./eventsItem'),
  AboutPage = require('./about'),

  Index = createClass({
    getInitialState() {return {}},
    cacheData(event) {
      var _state = {},
        {component, id, data} = event.detail

      if (id) {
        _state[component] = this.state[component] || {}
        _state[component][id] = data
       } else {
        _state[component] = data
      }
      return _state
    },
    componentDidMount() {
      window.addEventListener('fetch',
        _.compose(this.setState.bind(this), this.cacheData), false)
    },
    render() {
      const {div, a, br, img} = DOM
      return div(null, [
        a({key: 'link-to-blog', href: './#'}, 'Blog'),
        a({key: 'link-to-events', href: './#/events'}, 'Events'),
        a({key: 'link-to-about', href: './#/about'}, 'About'),
        br({key: 'break'}),
        img({
          key: 'image',
          src: 'client/images/banner.png',
          alt: 'Seoul Tech Society',
          className: 'main--logo'
        }),
        Pages({
          key: 'pages',
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

renderComponent(Index(), document.querySelector('.wrapper'))

module.exports = Index
