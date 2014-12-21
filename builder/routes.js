require('node-jsx').install({extension: '.jsx', harmony: true})

var React = require('react')
var Router = require('react-router-component')

var c = require('./config')
var rootUrl = c.home

var Wrapper = require(c.componentsDir + 'Wrapper/main')
var Static = require(c.componentsDir + 'Static/main')
var Home = require(c.pagesDir + 'Home/main')
var News = require(c.pagesDir + 'News/main')
var Events = require(c.pagesDir + 'Events/main')
var About = require(c.pagesDir + 'About/main')

var Routes = React.createClass({
  render: function() {
    return (
      React.DOM.div(null, [
        Router.Locations({path: this.props.path},
          Router.Location({
            path: '/',
            handler: Home,
            results: this.props.data}),
          Router.Location({
            path: '/events',
            handler: Events,
            results: this.props.data}),
          Router.Location({
            path: '/events/:y',
            handler: Events,
            results: this.props.data}),
          Router.Location({
            path: '/events/:y/:m/:d/:id',
            handler: Static,
            __html: this.props.description}),
          Router.Location({
            path: '/news',
            handler: News,
            results: this.props.data}),
          Router.Location({
            path: '/news/:y',
            handler: News,
            results: this.props.data}),
          Router.Location({
            path: '/news/:y/:m/:d/:id',
            handler: Static,
            __html: this.props.description}),
          Router.Location({
            path: '/about',
            handler: About,
            __html: this.props.description})
        )
      ])
    )
  }
})

module.exports = function(component, url) {
  return Wrapper({url: url, rootUrl: rootUrl, content: Routes(component)})
}
