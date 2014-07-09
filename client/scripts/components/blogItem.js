import {createClass, DOM} from 'react';

module.exports = createClass({
  render() {
    const {year, id} = this.props
    return DOM.div({dangerouslySetInnerHTML: {
      __html: require('../../content/target/blog/' + `${year}/${id}`)}})
  }
})
