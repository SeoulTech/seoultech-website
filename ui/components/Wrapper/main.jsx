/** @jsx React.DOM */

var React = require('react')
var Menu = require('../Menu/main')
var Social = require('../Social/main')

module.exports = React.createClass({
  render: function() {
    return (
      <div className="wrapper">
        <input id="wrapper-hidden-input" type="checkbox"/>
        <label
          className="wrapper-hamburger"
          htmlFor="wrapper-hidden-input"
          id="js-IEHamburger"/>
        <Menu url={this.props.url}/>
        <img
          className="wrapper-logo"
          id="seoultech-logo"
          src={this.props.rootUrl +  'source/images/banner.svg'}
          alt="Seoul Tech Society Banner"
          width="800px"
          height="364px"/>
        <div className="content" role="main">{this.props.content}</div>
        <Social className="content-footer"/>
      </div>
    )
}})
