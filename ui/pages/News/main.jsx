/** @jsx React.DOM */

var React = require('react')
var Timeline = require('../../components/Timeline/main.jsx')
var _ = require('../../scripts/util')

module.exports = React.createClass({
  render: function() {
    return <Timeline data={getData(this.props)}/>
  }
})

function getData(props) {
  return {
    title: null,
    entries: _.reverse(props.results).map(makeLinkToPost)
  }
}

function makeLinkToPost(x) {
  return Object.defineProperty(x, 'more', {
    value: './' + x.id + '.html',
    enumerable: true,
    writable: false
  })
}



// var React = require('react')
// var $ = React.DOM
// var _ = require('../../scripts/util')
// var newsEntry = require('../News_Entry/main')
// var List = require('../List/main')

// module.exports = React.createClass({
//   getDefaultProps: function() {return Object.freeze({results: []})},
//   render: function() {
//     return List({
//       parent: {className: 'news'},
//       children: {
//         className: 'news-post',
//         data: _.reverse(this.props.results).map(function(post, i, posts) {
//           var linkToPost = './' + post.id + '.html'

//           var title = $.h1({
//               key: 'link--title' + post.id,
//               className: 'home--news--post'},
//               $.a({
//                 key: 'link' + post.id,
//                 href: linkToPost}, post.title))

//           var readMore = $.a({
//               key: 'more' + post.id,
//               href: linkToPost}, 'Read more')

//           return this.props.titleOnly?
//             title
//             : newsEntry({
//                 link: linkToPost,
//                 readMore: readMore,
//                 id: post.id,
//                 title: post.title,
//                 date: post.date,
//                 description: post.excerpt
//               })
//           }, this)
//       }
//     })
//   }
// })