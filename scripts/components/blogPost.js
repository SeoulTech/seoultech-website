var React = require('react'),
  $ = React.DOM,
  url = require('../../builder/build.config').url

module.exports = React.createClass({
  getKey: function(decs) {return decs + this.props.id},
  render: function() {
    var prevLink = this.props.prevLink?
        $.a({
          key: this.getKey('prev'),
          href: this.props.prevLink
        }, '\u2190Previous Post ')
        : null,
      nextLink = this.props.nextLink?
        $.a({
          key: this.getKey('next'),
          href: this.props.nextLink
        }, 'Next Post\u2192')
        : null

    return $.div({
      key: this.getKey('post-container'),
      className: null}, [
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
        className: this.props.readMore?
          'blog--post--read-more'
          : null}, this.props.readMore),
      $.div({
        key: this.getKey('metadata'),
        className: 'blog--post--metadata'}, [
        $.label({
          key: this.getKey('date'),
          className: 'blog--post--date'}, this.props.date),
        $.br(),
        prevLink,
        nextLink])])}})