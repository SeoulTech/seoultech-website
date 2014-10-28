jest.dontMock('../main')

describe('static component', function() {
  it('renders static html', rendersStaticHTML)
})

/*** Implementation ***/
var React = require('react/addons'),
  TestUtils = React.addons.TestUtils,
  StaticComponent = require('../main'),
  render = TestUtils.renderIntoDocument,
  getByType = TestUtils.findRenderedComponentWithType


function rendersStaticHTML() {
  var component = render(StaticComponent({__html: '<h1>pass</h1>'}))

  expect(
    getByType(component, StaticComponent).getDOMNode().innerHTML
  ).toBe(
    '<h1>pass</h1>'
  )
}