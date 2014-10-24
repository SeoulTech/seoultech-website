jest.autoMockOff()

describe('menu component', function() {
  it('renders menu', renderMenu)
})

/*** Implementation ***/
var React = require('react/addons')
var Menu = require('../main')
var TestUtils = React.addons.TestUtils
var render = TestUtils.renderIntoDocument
var getByType = TestUtils.findRenderedComponentWithType

function renderMenu() {
  var children = getByType(render(Menu()), Menu).getDOMNode().children

  expect(
    children.length
  ).toBe(
    3
  )
}
