/** @jsx React.DOM */

var React = require('react/addons')
var Static = require('../../components/Static/main')
var List = require('../../components/List/main')

module.exports = React.createClass({
  render: function() {
    return (
      <div className="about">
        <div className="placeholder">VIDEO</div>
        <Static __html={this.props.__html}/>
        <h3>#seoultechsociety</h3>
        <div className="placeholder"></div>
      </div>
    )
  }
})
