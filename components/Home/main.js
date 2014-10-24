var React = require('react')
var $ = React.DOM
var eventsIndex = require('../Events/main')
var newsIndex = require('../News/main')
var staticComponent = require('../Static/main')

module.exports = React.createClass({
  render: function() {
    return (
      $.div({key: 'contentInner', className: 'content--inner'}, [
        eventsIndex({
          results: this.props.results.
          filter(function(r) {return r[0] == '/events'})[0]
          .slice(1)[0]
         }),
        newsIndex({
          results: this.props.results
            .filter(function(r) {return r[0] = '/news'})[0]
            .slice(1)[0],
          titleOnly: false}),
        staticComponent(this.props)
      ])
    )}})
