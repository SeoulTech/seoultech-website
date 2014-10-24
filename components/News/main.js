var React = require('react')
var $ = React.DOM
var _ = require('../../scripts/util')
var newsEntry = require('../News_Entry/main')
var List = require('../List/main')

module.exports = React.createClass({
  getInitialState: function() {return {posts: _.reverse(this.props.results)}},
  render: function() {
    // console.log(this.state.posts)
    return List({
      parent: {className: 'news'},
      children: {
        className: 'news-post',
        data: this.state.posts.map(function(post, i, posts) {
          var linkToPost = './' + post.id + '.html'

          var title = $.h1({
              key: 'link--title' + post.id,
              className: 'home--news--post'},
              $.a({
                key: 'link' + post.id,
                href: linkToPost}, post.title))

          var readMore = $.a({
              key: 'more' + post.id,
              href: linkToPost}, 'Read more')

          return this.props.titleOnly?
            title
            : newsEntry({
                link: linkToPost,
                readMore: readMore,
                id: post.id,
                title: post.title,
                date: post.date,
                description: post.excerpt
              })
          }, this)
      }
    })
  }
})