var React = require('react')
var Router = require('react-router-component')

var c = require('./config')

var Wrapper = require(c.componentsDir + 'Wrapper/main')
var Static = require(c.componentsDir + 'Static/main')
var Home = require(c.componentsDir + 'Home/main')
var Events = require(c.componentsDir + 'Events/main')
var News = require(c.componentsDir + 'News/main')

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
            path: '/events/:y/:m/:d/:id',
            handler: Static,
            __html: this.props.description}),
          Router.Location({
            path: '/news',
            handler: News,
            results: this.props.data}),
          Router.Location({
            path: '/news/:y/:m/:d/:id',
            handler: Static,
            __html: this.props.description}),
          Router.Location({
            path: '/about',
            handler: Static,
            __html: this.props.description})
        )
      ])
    )
  }
})

module.exports = function(c) {
  return Wrapper({content: Routes(c)})
}
