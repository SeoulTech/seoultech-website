var React = require('react'),
  $ = React.DOM,
  url = require('../../builder/build.config').url

module.exports = React.createClass({
  getBannerFallback: function() {
    if (typeof window !== 'undefined') {
      var b = /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i,
        browser = window.navigator.userAgent.match(b)

      if (browser[1] == 'MSIE' && browser[2] <= 8) {
        return url + 'source/images/banner.png'
      }
    }
    return url + 'source/images/banner.svg'
  },
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
      $.div({
        key: 'wrapper--nav',
        className: 'wrapper--nav',
        role: 'navigation'}, [
        $.a({
          key: 'link-to-home',
          className: 'wrapper--nav--link',
          href: url}, 'Home'),
        $.a({
          key: 'link-to-blog',
          className: 'wrapper--nav--link',
          href: url + 'blog/'}, 'Blog'),
        $.a({
          key: 'link-to-events',
          className: 'wrapper--nav--link',
          href: url + 'events/'}, 'Events'),
        $.a({
          key: 'link-to-about',
          className: 'wrapper--nav--link',
          href: url + 'about/'}, 'About'),
      $.img({
        key: 'image',
        src: this.getBannerFallback(),
        alt: 'Seoul Tech Society Banner',
        width: '800px',
        height: '364px',
        className: 'wrapper--logo'}),
      $.div({
        key: 'content',
        className: 'content',
        role: 'main'}, content)]),
      $.input({
        key: 'hidden-input',
        type: 'checkbox',
        id: 'wrapper--hidden-input'}),
      $.label({
        key: 'hamburger',
        htmlFor: 'wrapper--hidden-input',
        className: 'wrapper--hamburger',
        'onclick': ''}, 'HAMBURGER'),
      $.div({key: 'wrapper--overlay', className: 'wrapper--overlay'}, [
        $.nav({key: 'wrapper--overlay--nav'}, [
          $.ul({key: 'wrapper--overlay--ul'}, [
            $.li({}, $.a({href: url}, 'Home')),
            $.li({}, $.a({href: url + 'blog/'}, 'Blog')),
            $.li({}, $.a({href: url + 'events/'}, 'Events')),
            $.li({}, $.a({href: url + 'about/'}, 'About'))
            ])])])])}})
