/** @jsx React.DOM */

var React = require('react')
var Poster = require('./Poster/main.jsx')

module.exports = React.createClass({
  render: function() {
    return (
      <div className='entry'>
        <Poster image={this.props.poster}/>
        <label className='entry-date'>
          {new Date(this.props.time).toDateString()}
        </label>
        <h1>{this.props.title}</h1>
        <div dangerouslySetInnerHTML={{__html: this.props.excerpt}}/>
        <a href={this.props.more} className='entry-more'>Read More ></a>
      </div>
    )
  }
})

