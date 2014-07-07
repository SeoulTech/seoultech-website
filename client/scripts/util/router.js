var React = require('react'),
  $ = React.DOM,
  _ = require('lodash'),
  maybe = require('./util').maybe,
  get = require('./util').get;

module.exports = React.createClass({
  handleHashchange: function(props) {
    var lh = location.hash,
      hash = _.isEmpty(lh)? '/' : lh.slice(1).replace(/\/$/, ''),
      paramRegex = /(\(\?)?:\w+/g,
      routeToRegex = function(route) {
        return new RegExp('^' + route.replace(paramRegex, '([^/?]+)') +
          '(?:\\?([\\s\\S]*))?$')
      }

    return _(props).keys().concat({}).reduceRight(function(nextState, route) {
      var params = hash.match(routeToRegex(route)),
        getParamNames = function(route) {return route.match(paramRegex)},
        trimFirstEl = function(p) {return p.slice(1)},
        otherProps,
        urlParams

      if (params) {
        otherProps = get(props, route, 'data'),
        urlParams = _.zipObject(
          maybe(getParamNames(route)).fmap(trimFirstEl).return(),
          _.compact(trimFirstEl(params)))

        return _.assign(nextState, {
          handler: get(props, route, 'handler'),
          props: _.merge(urlParams, otherProps)})
      }

      return nextState
    })
  },
  setStateOnHashchange: function(props) {
    this.setState(this.handleHashchange(props))
  },
  componentWillReceiveProps: function(nextProps) {
    this.setStateOnHashchange(nextProps)
  },
  componentWillMount: function() {
    window.addEventListener('hashchange',
      this.setStateOnHashchange.bind(this, this.props), false)
    this.setStateOnHashchange(this.props)
  },
  render: function() {
    return this.state.handler(this.state.props)
  }
})