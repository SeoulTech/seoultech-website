var React = require('react')
var $ = React.DOM
var url = require('../../../builder/config').home
var Menu = require('../Menu/main')
var Social = require('../Social/main')

module.exports = React.createClass({
  render: function() {
    var content = this.props.content

    if (typeof content == 'function') {
      content = content(this.state)
    }

    return (
      $.div({className: 'wrapper'}, [
        $.input({
          key: 'hidden-input',
          type: 'checkbox',
          id: 'wrapper-hidden-input'}),
        $.label({
          key: 'hamburger',
          className: 'wrapper-hamburger',
          htmlFor: 'wrapper-hidden-input',
          id: 'hamburger',
          'onclick': ''}, 'E'),
        Menu(),
        $.img({
          key: 'image',
          className: 'wrapper-logo',
          id: 'seoultech-logo',
          src: url + 'source/images/banner.svg',
          alt: 'Seoul Tech Society Banner',
          width: '800px',
          height: '364px'}),
        $.div({
          key: 'content',
          className: 'content',
          role: 'main'}, content),
        Social({className: 'menu-footer'})
      ])
    )
}})
