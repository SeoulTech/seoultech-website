var React = require('react/addons')
var Static = require('../../components/Static/main')
var List = require('../../components/List/main')
var $ = React.DOM

module.exports = React.createClass({
  displayName: 'About',
  render: function() {
    return $.div({className: 'about'}, [
      $.div({className: 'placeholder'}),
      Static(this.props),
      $.h2(null, '#seoultechsociety'),
      $.div({className: 'placeholder'})
    ])
  }
})
