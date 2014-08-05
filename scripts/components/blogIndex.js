var React = require('react'),
  $ = React.DOM,
  _ = require('../utilities/util'),
  blogPost = require('./blogPost'),
  url = require('../../builder/build.config').url

module.exports = React.createClass({
  render: function() {
    return $.ul({key: 'blog-index', className: 'blog--posts'},
      _.reverse(this.props.results).map(function(post) {
        var linkToPost = url + 'blog/' + post.id + '.html',
          title = $.h1({
            key: 'link--title' + post.id,
            className: 'home--blog--post'},
            $.a({key: 'link' + post.id, href: linkToPost}, post.title)),
          readMore = $.a({
            key: 'more' + post.id,
            href: linkToPost}, 'Read more')

        return $.li({key: post.id, className: 'blog--post'},
          this.props.titleOnly? title : blogPost({
            link: linkToPost,
            readMore: readMore,
            id: post.id,
            title: post.title,
            date: post.date,
            tags: post.tags,
            description: post.excerpt}))}, this))}})