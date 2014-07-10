import {createClass, DOM} from 'react';

export default createClass({
  render: () => DOM.div({dangerouslySetInnerHTML: {
    __html: require('../../content/target/pages/about.html')
  }})
})
