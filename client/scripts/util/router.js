var React = require('react'),
  $ = React.DOM,
  _ = require('./util');

module.exports = React.createClass({
  getNextState: function(props) {
    var lh = location.hash,
      hash = _.isEmpty(lh)? '/' : lh.slice(1).replace(/\/$/, ''),
      paramRegex = /(\(\?)?:\w+/g,
      routeToRegex = function(route) {
        return new RegExp('^' + route.replace(paramRegex, '([^/?]+)') +
          '(?:\\?([\\s\\S]*))?$')
      }

    return _.reduceRight(_.keys(props).concat({}), function(nextState, route) {
      var params = hash.match(routeToRegex(route)),
        getParamNames = function(route) {return route.match(paramRegex)},
        trimFirstEl = function(p) {return p.slice(1)},
        otherProps,
        urlParams

      if (params) {
        otherProps = _.get(props, route, 'data'),
        urlParams = _.zipObject(
          _.maybe(getParamNames(route)).fmap(trimFirstEl).return(),
          _.compact(trimFirstEl(params)))
        return _.assign(nextState, {
          handler: _.get(props, route, 'handler'),
          props: _.merge(urlParams, otherProps)
        })
      }

      return nextState
    })
  },
  updateState: function(_, props) {
    this.setState(this.getNextState(props || this.props))
  },
  componentWillReceiveProps: function(nextProps) {
    this.updateState(_, nextProps)
  },
  componentWillMount: function() {
    window.addEventListener('hashchange', this.updateState, false)
    this.updateState()
  },
  render: function() {
    return this.state.handler(this.state.props)
  }
})
