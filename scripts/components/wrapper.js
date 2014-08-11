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
        id: 'seoultech-logo',
        src: url + 'source/images/banner.svg',
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
        id: 'hamburger',
        className: 'wrapper--hamburger',
        'onclick': ''}, 'HAMBURGER'),
      $.div({key: 'wo', className: 'wrapper--overlay', id: 'menu'}, [
        $.nav({key: 'won', className: 'wrapper--overlay--nav'}, [
          $.ul({key: 'wou', className: 'wrapper--overlay--ul'}, [
            $.li({
              key: 'home',
              className: 'wrapper--overlay--li'},
              $.a({
                key: 'home-a',
                className: 'wrapper--overlay--link',
                href: url}, 'Home')),
            $.li({
              key: 'blog',
              className: 'wrapper--overlay--li'},
              $.a({
                key: 'blog-a',
                className: 'wrapper--overlay--link',
                href: url + 'blog/'}, 'Blog')),
            $.li({
              key: 'events',
              className: 'wrapper--overlay--li'},
              $.a({
                key: 'events-a',
                className: 'wrapper--overlay--link',
                href: url + 'events/'}, 'Events')),
            $.li({
              key: 'about',
              className: 'wrapper--overlay--li'},
              $.a({
                key: 'about-a',
                className: 'wrapper--overlay--link',
                href: url + 'about/'}, 'About'))
            ])])])])}})
