/** @jsx React.DOM */

var React = require('react')
var Timeline = require('../../components/Timeline/main.jsx')
var _ = require('../../scripts/util')
var headers = {
  upcoming: 'upcoming',
  past: 'past'
}

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <Timeline data={getData(this.props, headers.upcoming)}/>
        <Timeline data={getData(this.props, headers.past)}/>
      </div>
    )
  }
})

function getData(props, title) {
  var entries = _.reverse(_.sortBy(props.results, 'time'))
    .filter(byDate(title))
    .map(makeLinkToPost)
  return {
    title: entries.length > 0? title : null,
    entries: entries
  }
}

function byDate(title) {
  return function(x) {
    return (
      title == headers.upcoming?
        Date.parse(x.time) > Date.now()
      : Date.parse(x.time) <= Date.now()
    )
  }
}

function makeLinkToPost(x) {
  return Object.defineProperty(x, 'more', {
    value: './' + x.id + '.html',
    enumerable: true,
    writable: false
  })
}

// var React = require('react/addons')
// var $ = React.DOM
// var  _ = require('../../scripts/util')
// var List = require('../List/main')
// var Event = require('../Event/main')

// module.exports = React.createClass({
//   displayName: 'Events',
//   getDefaultProps: function() {
//     return {
//       upcomingHeader: 'upcoming events',
//       pastHeader: 'past events'
//     }
//   },
//   groupBy: function(header, data) {
//     return (
//       data.length == 0? []
//       :
//       [
//         $.h1({className: 'events-grouping'}, header),
//         List({
//           parent: {className: 'events'},
//           children: {data: data.map(function(e) {return Event({event: e})})}
//         })
//       ]
//     )
//   },
//   render: function() {
//     var events = _.reverse(this.props.results)
//     var upcoming = events
//       .filter(function(e) {return Date.parse(e.time) > Date.now()})

//     var past = events
//       .filter(function(e) {return Date.parse(e.time) <= Date.now()})

//     return $.div({className: 'events'}, [
//       this.groupBy(this.props.upcomingHeader, upcoming),
//       this.groupBy(this.props.pastHeader, past)
//     ])
//   }
// })
