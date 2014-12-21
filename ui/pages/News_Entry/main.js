var React = require('react')
var $ = React.DOM

module.exports = React.createClass({
  render: function() {
    var poster = (
      this.props.poster?
        $.img({className: 'event-image', src: this.props.poster})
        :
        null
      )

    var prevLink = (
      this.props.prevLink?
        $.a({key: 3, href: this.props.prevLink}, '\u2190Previous entry ')
        :
        null
      )

    var nextLink = (
      this.props.nextLink?
        $.a({key: 4, href: this.props.nextLink}, 'Next entry\u2192')
        :
        null
      )

    return (
      $.div({className: 'news-entry'}, [
        poster,
        $.h1(
          {className: 'news-entry-title'},
          this.props.link?
            $.a({href: this.props.link}, this.props.title)
            :
            this.props.title
        ),
        $.div({
          className: 'news-entry-article',
          dangerouslySetInnerHTML: {__html: this.props.description}
        }),
        $.div(
          {className: this.props.readMore? 'news-entry-more' : null},
          this.props.readMore
        ),
        $.div(
          {className: 'news-entry-metadata'},
          [
            $.label({className: 'news-entry-date', key: 1}, this.props.date),
            $.br({key: 2}),
            prevLink,
            nextLink
          ]
        )
      ])
    )
  }
})