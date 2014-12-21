/** @jsx React.DOM */

var React = require('react')

module.exports = React.createClass({
  render: function() {
    return (
      this.props.image?
        <img src={this.props.image}></img>
      : <div className='poster-placeholder'></div>
    )
  }
})