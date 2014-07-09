module _ from '../util/util';
import {createClass, DOM} from 'react';
const index = require('../../content/target/index');

module.exports = createClass({
  render() {
    const {div, h3, ul, li, a} = DOM

    return div(null, _.keys(index).reverse()
      .filter(RegExp.prototype.test.bind(/.*blog*/))
      .map(path => {
        const year = path.match(/[0-9]+/)
        return [
          h3(null, year),
          ul(null, _.map(index[path], entry =>
            li({key: entry},a({href: `./#/blog/${year}/${entry}`}, entry))))
        ]
      }))
  }
})
