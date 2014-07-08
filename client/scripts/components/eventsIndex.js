var React = require('react'),
  $ = React.DOM,
  _ = require('../util/util'),
  fetch = require('../util/fetch');

module.exports = React.createClass({
  componentWillMount: _.partial(fetch, 'events'),
  render: function() {
    return $.ul(null, [
      _.map(_.get(this.props, 'results'), function(d, i) {
        return $.li({key: d.id}, [
          $.span({key: 'date' + d.id}, '[' + new Date(d.time).toDateString() + '] '),
          $.a({key: 'name' + d.id, href: './#/events/' + d.id}, d.name),
          $.span({key: 'rsvp' + d.id}, ' (' + d.yes_rsvp_count + ' techies)')
        ])
      })
    ])
  }
})
