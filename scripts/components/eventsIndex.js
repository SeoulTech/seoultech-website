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
    return $.ul({key: 'events', className: ''},
      _.reverse(this.props.results).map(function(event, i) {
        return $.li({
          key: event.id,
          className: 'event'}, [
          $.h1({className: 'event--title'}, [
            $.label({
              key: 'rsvp' + event.id,
              className: 'event--rsvp'}, '(' + event.yes_rsvp_count + ') '),
            $.a({
              key: 'link' + event.id,
              href: url + 'events/' + event.id + '.html'}, event.name)
            ])])}))}})