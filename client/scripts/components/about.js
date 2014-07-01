var React = require('react'),
  $ = React.DOM,
  html = require('../../content/target/pages/about');

module.exports = React.createClass({
  render: function() {
    return $.div({dangerouslySetInnerHTML: {__html: html}})
  }
});
