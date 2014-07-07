var React = require('react'),
  $ = React.DOM,
  _ = require('lodash'),
  fetch = require('../util/fetch'),
  get = require('../util/util').get;

module.exports = React.createClass({
  componentDidMount: _.partial(fetch, 'events'),
  render: function() {
    return $.ul(null, [
      _.map(get(this.props, 'results'), function(d, i) {
        return $.li({key: d.id}, [
          $.span({key: 'date' + d.id}, '[' + new Date(d.time).toDateString() + '] '),
          $.a({key: 'name' + d.id, href: './#/events/' + d.id}, d.name),
          $.span({key: 'rsvp' + d.id}, ' (' + d.yes_rsvp_count + ' techies)')
        ])
      })
    ])
  }
})
