var React = require('react'),
  $ = React.DOM,
  _ = require('../utilities/util'),
  url = require('../../builder/build.config').url

module.exports = React.createClass({
  render: function() {
    return $.ul({key: 'blog-index'},
      _.reverse(this.props.results).map(function(post, i) {
        return $.li({key: post.id},
          $.a({
            key: 'link' + post.id,
            href: url + '/blog/' + post.id + '.html'}, post.title))}))}})
