module _ from '../util/util';
import fetch from '../util/fetch';
import {createClass, DOM as $} from 'react';

export default createClass({
  componentWillMount: _.partial(fetch, 'events'),
  render() {
    return $.ul(null, [
      _.map(_.get(this.props, 'results'), (d, i) => $.li({key: d.id}, [
        $.span({key: 'date' + d.id}, `[${new Date(d.time).toDateString()}]`),
        $.a({key: 'name' + d.id, href: `./#/events/${d.id}`}, d.name),
        $.span({key: 'rsvp' + d.id}, ` (${d.yes_rsvp_count} techies)`)
      ]))
    ])
  }
})
