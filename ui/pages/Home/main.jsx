/** @jsx React.DOM */

var React = require('react')
var Timeline = require('../../components/Timeline/main.jsx')
var _ = require('../../scripts/util')
// var eventsIndex = require('../Events/main')
// var newsIndex = require('../News/main')
// var staticComponent = require('../Static/main')
var headers = {
  upcoming: 'upcoming',
  past: 'past'
}

var Description = React.createClass({
  render: function() {
    return (
      <div>
        <h1>It is all about you</h1>
        <p>join seoul tech society and become a part of the most vibrant seoul tech community</p>
        <h3>MEETUP BUTTON</h3>
      </div>
    )
  }
})

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <Description/>
        <Timeline data={getData(this.props.results[0][1], headers.upcoming)}/>
        <a href='./events/'>More Events >></a>
        <Timeline data={getData(this.props.results[1][1], 'news', 3)}/>
        <a href='./news/'>More News >></a>
      </div>
    )
  }
})

function getData(props, title, length) {
  var entries = _.reverse(props)
    .filter(byDate(title))
    .map(makeLinkToPost)

  return {
    title: entries.length > 0? title : null,
    entries: entries,
    length: length
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