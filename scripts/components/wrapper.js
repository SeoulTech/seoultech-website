var React = require('react'),
  $ = React.DOM

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
      $.a({key: 'link-to-home', href: '/'}, 'Home'),
      $.a({key: 'link-to-blog', href: '/blog'}, 'Blog'),
      $.a({key: 'link-to-events', href: '/events'}, 'Events'),
      $.a({key: 'link-to-about', href: '/about'}, 'About'),
      $.br({key: 'break'}),
      $.img({
        key: 'image',
        src: '/source/images/banner.png',
        alt: 'Seoul Tech Society',
        width: '800px',
        height: '364px',
        className: 'main--logo'}),
      $.div({key: 'content'}, content)])}})