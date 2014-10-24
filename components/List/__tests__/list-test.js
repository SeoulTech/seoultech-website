jest.dontMock('../main')

describe('list component', function() {
  it('expects `parent` and `children` as properties', expectsProps)
  it('returns ul', returnsUL)
  it('assigns correct css class names', assignsClassNames),
  it('renders children data correctly', rendersChildren)
})

/*** Implementation ***/
var React = require('react/addons')
var List = require('../main')
var TestUtils = React.addons.TestUtils
var render = TestUtils.renderIntoDocument
var getByType = TestUtils.findRenderedComponentWithType
var emptyList = List()
var mockList = List({
    parent: {className: 'mock'},
    children: {data: [1, 2, 3]}
  })


function mapDOMNodes(fn, nodes) {return [].map.call(nodes, fn)}

function parentClassName(c) {return c.getDOMNode().className}

function childrenClassNames(c) {
  return mapDOMNodes(
    function(el) {return el.className},
    c.getDOMNode().children
  )
}


function expectsProps() {
  expect(
    Object.keys(getByType(render(emptyList), List).props)
  ).toEqual(
    ['parent', 'children']
  )
}

function returnsUL() {
  expect(
    getByType(render(emptyList), List).getDOMNode().tagName
  ).toBe(
    'UL'
  )
}

function assignsClassNames() {
  expect(
    parentClassName(getByType(render(emptyList), List))
  ).toBe(
    'block-list'
  )

  expect(
    parentClassName(getByType(render(mockList), List))
  ).toBe(
    'mock-list'
  )

  expect(
    childrenClassNames(getByType(render(mockList), List))
  ).toEqual(
    ['mock-list-el', 'mock-list-el', 'mock-list-el']
  )
}

function rendersChildren() {
  expect(
    mapDOMNodes(
      function(el) {return el.innerHTML},
      getByType(render(mockList), List).getDOMNode().children
    )
  ).toEqual(
    ['1', '2', '3']
  )
}