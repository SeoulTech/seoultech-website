var React = require('react'),
  $ = React.DOM,
  _ = require('lodash'),
  fetch = require('../util/fetch'),
  get = require('../util/util').get;

module.exports = React.createClass({
  componentDidMount: function() {
    fetch('event', this.props.id)
    fetch('people', this.props.id)
  },
  render: function() {
    return $.div(null, [
      $.h1({key: 'name'}, get(this.props.data, 'event',this.props.id, 'name')),
      $.div({key: 'description', dangerouslySetInnerHTML: {
        __html: get(this.props, 'event', this.props.id, 'description')}}),
      $.h3({key: 'h3'}, 'Attendees:'),
      $.ul({key: 'ul'}, [
        _.map(get(this.props.rsvp, this.props.id, 'results'), function(r, i) {
          return $.li({key: i}, r.member.name)
        })
      ])
    ])
  }
})
