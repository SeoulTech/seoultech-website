var React = require('react/addons')
var $ = React.DOM
var _ = require('lodash')
var url = require('../../../builder/config').url
var List = require('../List/main')
var Social = require('../Social/main')

var Top = React.createClass({
  displayName: 'Top',
  render: function() {
    return $.header(this.props, $.h1({key: 1}, 'Seoul Tech Society'))
  }
})

var Nav = React.createClass({
  displayName: 'Nav',
  render: function() {
    return (
      $.nav(
        this.props,
        List({
          parent: this.props,
          children: {
            data: [
              $.a({href: url}, 'home'),
              $.a({href: url + 'events/'}, 'events'),
              $.a({href: url + 'news/'}, 'news'),
              // $.a({href: url + 'projects/'}, 'projects'),
              $.a({href: url + 'about/'}, 'about')
            ]
          }
        })
      )
    )
  }
})

module.exports = React.createClass({
  displayName: 'Menu',
  render: function() {
    return (
      $.div({className: 'menu'}, [
        Top({key: 1, className: 'menu-header'}),
        Nav({key: 2, className: 'menu-nav'}),
        Social({key: 3, className: 'menu-footer'})
      ])
    )
  }
})
