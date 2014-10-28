/** @jsx React.DOM */

var React = require('react')
var Entry = require('./Entry/main.jsx')

module.exports = React.createClass({
  render: function() {
    return (
      <div className='timeline'>
        <h1>{this.props.data.title}</h1>
        {getEntries(this.props.data)}
      </div>
    )
  }
})

function getEntries(data) {
  return data.entries
    .slice(0, data.length || data.entries.length)
    .map(Entry)
}