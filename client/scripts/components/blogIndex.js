module _ from '../util/util';
import {createClass, DOM} from 'react';
import index from '../../content/target/index';

export default createClass({
  render() {
    const {div, h3, ul, li, a} = DOM

    return div(null, _.keys(index).reverse()
      .filter(RegExp.prototype.test.bind(/.*blog*/))
      .map(path => {
        const year = path.match(/[0-9]+/),
          entries = _.sortBy(index[path], 'date').reverse()
        return [
          h3(null, year),
          ul(null, _.map(entries, entry =>
            li({key: entry.filename},
              a({href: `./#/blog/${year}/${entry.filename}`}, entry.title))))
        ]
      }))
  }
})
