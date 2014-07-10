module _ from '../util/util';
import {createClass} from 'react';

export default createClass({
  getNextState(props) {
    const lh = location.hash,
      hash = _.isEmpty(lh)? '/' : lh.slice(1).replace(/\/$/, ''),
      paramRegex = /(\(\?)?:\w+/g

    return _.reduceRight(_.keys(props).concat({}), (nextState, route) => {
      const routeToRegex = (route) => new RegExp('^' +
          route.replace(paramRegex, '([^/?]+)') + '(?:\\?([\\s\\S]*))?$'),
        params = hash.match(routeToRegex(route)),
        getParamNames = (route) => route.match(paramRegex),
        trimFirstEl = (p) => p.slice(1)

      if (params) {
        const otherProps = _.get(props, route, 'data'),
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
  updateState(_, props = this.props) {
    this.setState(this.getNextState(props))
  },
  componentWillReceiveProps(nextProps) {
    this.updateState(_, nextProps)
  },
  componentWillMount() {
    window.addEventListener('hashchange', this.updateState, false)
    this.updateState()
  },
  render() {
    return this.state.handler(this.state.props)
  }
})
