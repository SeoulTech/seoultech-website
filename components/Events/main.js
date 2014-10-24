var React = require('react/addons')
var $ = React.DOM
var  _ = require('../../scripts/util')
var List = require('../List/main')
var Event = require('../Event/main')

module.exports = React.createClass({
  displayName: 'Events',
  getDefaultProps: function() {
    return {
      upcomingHeader: 'upcoming events',
      pastHeader: 'past events'
    }
  },
  groupBy: function(header, data) {
    return (
      data.length == 0? []
      :
      [
        $.h1({className: 'events-grouping'}, header),
        List({
          parent: {className: 'events'},
          children: {data: data.map(function(e) {return Event({event: e})})}
        })
      ]
    )
  },
  render: function() {
    var events = _.reverse(this.props.results)
    var upcoming = events
      .filter(function(e) {return Date.parse(e.time) > Date.now()})

    var past = events
      .filter(function(e) {return Date.parse(e.time) <= Date.now()})

    return $.div({className: 'events'}, [
      this.groupBy(this.props.upcomingHeader, upcoming),
      this.groupBy(this.props.pastHeader, past)
    ])
  }
})
