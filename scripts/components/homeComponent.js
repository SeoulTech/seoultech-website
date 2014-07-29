var React = require('react'),
  $ = React.DOM,
  eventsIndex = require('./eventsIndex'),
  blogIndex = require('./blogIndex'),
  staticComponent = require('./staticComponent'),
  extract = require('../utilities/extract')

module.exports = React.createClass({
  getInitialState: function() {return this.props},
  componentWillReceiveProps: function(props) {
    this.setState({events: extract(this.state.config.events, props.results)})
  },
  render: function() {
    return $.div(null, [
      $.h1(null, this.state.events.title),
      eventsIndex(this.state.events),
      $.h1(null, this.state.blog.title),
      blogIndex(this.state.blog),
      staticComponent(this.state.custom)
    ])
  }
})