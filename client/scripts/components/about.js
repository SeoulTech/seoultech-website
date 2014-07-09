import {createClass, DOM} from 'react';
const __html = require('../../content/target/pages/about')
module.exports = createClass({
  render: () => DOM.div({dangerouslySetInnerHTML: {__html}})
})
