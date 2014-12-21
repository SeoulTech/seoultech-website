/** @jsx React.DOM */

var React = require('react')
var Timeline = require('../../components/Timeline/main.jsx')
var _ = require('../../scripts/util')

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
        <Timeline 
          data={getData(
            filterBy('/events', this.props.results),
            headers.upcoming
        )}/>
        <a href='./events/'>More Events >></a>
        <Timeline data={
          getData(
            filterBy('/news', this.props.results),
            'news',
            5
          ) 
        }/>
        <a href='./news/'>More News >></a>
      </div>
    )
  }
})

function filterBy(x, data) {
  return data.filter((y) => y.path.indexOf(x) > -1)
}

function getData(results, title, length) {
  var entries = _.reverse(_.sortBy(results, 'time'))
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
        x.time > Date.now()
      : x.time <= Date.now()
    )
  }
}

function makeLinkToPost(x) {
  return Object.defineProperty(x, 'more', {
    value: '.' + x.filename,
    enumerable: true,
    writable: false
  })
}
