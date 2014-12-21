var React = require('react/addons')
var $ = React.DOM

module.exports = React.createClass({
  render: function() {
    return $.div({dangerouslySetInnerHTML: this.props})
  }
})