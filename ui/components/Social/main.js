var React = require('react')
var List = require('../List/main')
var $ = React.DOM

module.exports = React.createClass({
  displayName: 'Social',
  render: function() {
    return (
      $.footer(
        this.props,
        List({
          parent: this.props,
          children: {
            data: [
              $.a({href: 'instagram.com'}, 'Instagram'),
              $.a({href: 'twitter.com'}, 'Twitter'),
              $.a({href: 'facebook.com'}, 'Facebook'),
              $.a({href: 'meetup.com'}, 'Meetup')
            ]
          }
        })
      )
    )
  }
})