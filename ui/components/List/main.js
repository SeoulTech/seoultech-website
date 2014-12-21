/**
 * List component to generate unordered lists.
 * Keys for children are assigned automatically.
 * CSS classnames are assigned automatically with the following convention:
 * `parentBlockName-list-el` where `parentBlockName` is received from props
 * Properties:
 *   + `parent`: <ul {parent}></ul>
 *   + `children`: <li {children}>{children.data}</li>
 */

var React = require('react/addons')
var _ = require('lodash')

var $ = React.DOM

module.exports = React.createClass({
  displayName: 'List',
  propTypes: {
    parent: React.PropTypes.object.isRequired,
    children: React.PropTypes.shape({
      data: React.PropTypes.array.isRequired
    })
  },
  getDefaultProps: function() {
    return {
      parent: Object.freeze({className: 'block'}),
      children: Object.freeze({})
    }
  },
  render: function() {
    var parent = _.clone(this.props.parent)
    var children = _.clone(this.props.children)
    var parentClassName = parent.className + '-list'
    var childrenClassName = (children.className || parentClassName) + '-el'

    return $.ul(
      _.assign(parent, {className: parentClassName}),
      _.map(children.data, function(element, i) {
        return $.li(
          _.merge(
            {key: i, className: childrenClassName},
            _.omit(children, 'data')),
          element
        )
      })
    )
  }
})