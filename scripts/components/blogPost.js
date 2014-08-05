var React = require('react'),
  $ = React.DOM

module.exports = React.createClass({
  getKey: function(decs) {return decs + this.props.id},
  render: function() {
    return $.div({
      key: this.getKey('post-container'),
      className: ''}, [
      $.h1({
        key: this.getKey('title'),
        className: 'blog--post--title'},
        this.props.link?
          $.a({
            key: this.getKey('link'),
            href: this.props.link}, this.props.title)
          : this.props.title),
      $.div({
        key: this.getKey('article'),
        className: 'blog--post--article',
        dangerouslySetInnerHTML: {__html: this.props.description}}),
      $.div({
        key: this.getKey('read-more'),
        className: 'blog--post--read-more'}, this.props.readMore),
      $.div({
        key: this.getKey('metadata'),
        className: 'blog--post--metadata'}, [
        $.label({
          key: this.getKey('date'),
          className: 'blog--post--date'}, this.props.date),
        $.ul({
          key: this.getKey('tags'),
          className: 'blog--post--tags'},
          this.props.tags.map(function(tag) {
            return $.li({
              key: this.getKey(tag),
              className: 'blog--post--tag'},
              $.a({
                key: this.getKey(tag + 'link')}, '#' + tag))}, this))])])}})