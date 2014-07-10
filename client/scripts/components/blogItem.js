import {createClass, DOM} from 'react';

export default createClass({
  render() {
    const p = this.props.year + '/' + this.props.id
    return DOM.div({dangerouslySetInnerHTML: {
      __html: require('../../content/target/blog/' + p + '.html')
    }})
  }
})
