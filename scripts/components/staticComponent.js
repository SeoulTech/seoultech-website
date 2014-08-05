var React = require('react'),
  $ = React.DOM

module.exports = React.createClass({
  render: function() {
    return $.div({
      className: '',
      dangerouslySetInnerHTML: {__html: this.props.html}})}})