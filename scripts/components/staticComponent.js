var React = require('react'),
  $ = React.DOM

module.exports = React.createClass({
  render: function() {
    return $.div({dangerouslySetInnerHTML: {__html: this.props.html}})}})