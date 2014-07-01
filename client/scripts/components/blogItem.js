var React = require('react'),
  $ = React.DOM,
  _ = require('lodash');

module.exports = React.createClass({
  render: function() {
    var par = this.props.year + '/' + this.props.id
    return $.div({dangerouslySetInnerHTML: {
      __html: require('../../content/target/blog/' + par)}})
  }
});
