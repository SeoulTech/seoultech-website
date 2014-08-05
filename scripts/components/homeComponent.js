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
    return $.div({key: 'contentInner', className: 'content--inner'}, [
      $.h1({key: 'home--events-title'}, this.state.events.title),
      eventsIndex(this.state.events),
      $.h1({key: 'home--blog-title'}, this.state.blog.title),
      blogIndex({results: this.state.blog.results, titleOnly: true}),
      staticComponent(this.state.custom)
    ])
  }
})