var React = require('react'),
  $ = React.DOM,
  _ = require('lodash'),
  fetch = require('../util/fetch'),
  Link = require('react-router-component').Link,
  get = require('../util/util').get;

module.exports = React.createClass({
  // getInitialState: function() {
  //   return {results: get(this.props.data, 'results')}
  // },
  // componentWillReceiveProps: function() {
  //   this.setState({results: this.props.data.results})
  // },
  componentDidMount: _.partial(fetch, 'events'),
  render: function() {
    return $.ul(null, [
      _.map(get(this.props.data, 'results'), function(d, i) {
        return $.li({key: d.id}, [
          $.span({key: 'date' + d.id}, '[' + new Date(d.time).toDateString() + '] '),
          Link({key: 'name' + d.id, href: '/events/' + d.id}, d.name),
          $.span({key: 'rsvp' + d.id}, ' (' + d.yes_rsvp_count + ' techies)')
        ])
      })
    ])
  }
})
