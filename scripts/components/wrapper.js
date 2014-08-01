var React = require('react'),
  $ = React.DOM,
  url = require('../../builder/build.config').url

module.exports = React.createClass({
  componentDidMount: function() {
    var _this = this
    window.addEventListener('fetch', function(event) {
      _this.setState(event.detail.data)
    }, false)
  },
  render: function() {
    var content = this.props.content
    if (typeof content == 'function') {
      content = content(this.state)}

    return $.div({className: 'wrapper'}, [
      $.a({key: 'link-to-home', href: url}, 'Home'),
      $.a({key: 'link-to-blog', href: url + 'blog'}, 'Blog'),
      $.a({key: 'link-to-events', href: url + 'events'}, 'Events'),
      $.a({key: 'link-to-about', href: url + 'about'}, 'About'),
      $.br({key: 'break'}),
      $.img({
        key: 'image',
        src: url + 'source/images/banner.png',
        alt: 'Seoul Tech Society',
        width: '800px',
        height: '364px',
        className: 'main--logo'}),
      $.div({key: 'content'}, content)])}})