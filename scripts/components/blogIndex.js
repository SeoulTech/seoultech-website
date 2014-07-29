var React = require('react'),
  $ = React.DOM,
  _ = require('../utilities/util')

module.exports = React.createClass({
  render: function() {
    return $.ul({key: 'blog-index'},
      _.reverse(this.props.results).map(function(post, i) {
        return $.li({key: post.id},
          $.a({key: 'link' + post.id, href: '/blog/' + post.id + '.html'},
            post.title))}))}})
