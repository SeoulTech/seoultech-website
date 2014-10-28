var React = require('react/addons')
var $ = React.DOM

var Poster = React.createClass({
    render: function() {
      return this.props.src? $.img(this.props) : $.div(this.props)
    }
  })

module.exports = React.createClass({
  displayName: 'Event',
  getDefaultProps: function() {
    return {
      event: Object.freeze({}),
    }
  },
  render: function() {
    var event = this.props.event
    var time = event.time
    var venue = event.venue
    var title = event.title
    var href = event.path.replace('/events/', './') + '.html'

    return $.div({className: 'event'}, [
      (title && href) && $.a({className: 'event-title', href: href}, title),
      time && $.label({className: 'event-date'}, time),
      // venue && $.label({className: 'event-venue'}, venue),
      Poster({className: 'event-image', src: this.props.poster})
    ])
  }
})
