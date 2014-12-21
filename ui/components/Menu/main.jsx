/** @jsx React.DOM */

var React = require('react/addons')
var _ = require('lodash')
var List = require('../List/main')
var Social = require('../Social/main')

var Top = React.createClass({
  render: function() {
    return (
      <header key={this.props.key} className={this.props.className}>
        <h1 key="1">Seoul Tech Society</h1>
      </header>
    )
  }
})

var Nav = React.createClass({
  render: function() {
    return (
      <nav key={this.props.key} className={this.props.className}>
        <List
          parent={this.props}
          children={{
            data: [
              <a href={this.props.url}>home</a>,
              <a href={this.props.url + 'events/'}>events</a>,
              <a href={this.props.url + 'news/'}>news</a>,
              <a href={this.props.url + 'about/'}>about</a>
            ]
          }}
        />
      </nav>
    )
  }
})

module.exports = React.createClass({
  render: function() {
    return (
      <div className="menu">
        <Top key="1" className="menu-header"/>
        <Nav key="2" className="menu-nav" url={this.props.url}/>
        <Social key="3" className="menu-footer"/>
      </div>
    )
  }
})
