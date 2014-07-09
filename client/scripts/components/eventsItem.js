module _ from '../util/util';
import {createClass, DOM} from 'react';
const fetch = require('../util/fetch');

module.exports = createClass({
  componentDidMount() {
    fetch('event', this.props.id)
    fetch('people', this.props.id)
  },
  render() {
    const {rsvp, id} = this.props,
      {h1, div, h3, ul, li} = DOM

    return div(null, [
      h1({key: 'name'}, _.get(this.props.data, 'event',id, 'name')),
      div({key: 'description', dangerouslySetInnerHTML: {
        __html: _.get(this.props, 'event', id, 'description')}}),
      h3({key: 'h3'}, 'Attendees:'),
      ul({key: 'ul'}, [
        _.map(_.get(rsvp, id, 'results'), (r, i) =>
          li({key: i}, r.member.name)
        )
      ])
    ])
  }
})
