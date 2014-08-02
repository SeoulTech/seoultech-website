var React = require('react'),
  $ = React.DOM,
  fetch = require('../utilities/fetch'),
  _ = require('../utilities/util'),
  url = require('../../builder/build.config').url

module.exports = React.createClass({
  getInitialState: function() {return this.props},
  componentDidMount: function() {
    window.setTimeout(fetch.bind(this, 'events'), 100)
  },
  render: function() {
    return $.ul({key: 'events'},
      _.reverse(this.props.results).map(function(event, i) {
        var rsvp = event.yes_rsvp_count,
          noun = ' guest' + (rsvp == 1? '' : 's')

        return $.li({key: event.id}, [
          $.a({
            key: 'link' + event.id,
            href: url + 'events/' + event.id + '.html'}, event.name),
          $.label({key: 'rsvp' + event.id}, ' (' + rsvp + noun + ')')])}))}})