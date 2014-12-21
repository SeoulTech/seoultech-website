jest.autoMockOff()

describe('event component', function() {
  it('renders image when `src` is defined', renderWithSrc)
  it('renders placeholder when `src` is undefined', renderWithoutSrc)
})

/*** Implementation ***/
var React = require('react/addons')
var Event = require('../main')
var TestUtils = React.addons.TestUtils
var render = TestUtils.renderIntoDocument
var getByType = TestUtils.findRenderedComponentWithType
var mockEvent = Event({
  poster: 'POSTER_SOURCE',
  event: {
    time: 1,
    venue: 2,
    title: 3,
    path: 4
  }
})

function renderWithSrc() {
  var children = getByType(render(mockEvent), Event).getDOMNode().children

  expect(
    children.length
  ).toBe(
    4
  )

  expect(
    children[0].tagName
  ).toBe(
    'IMG'
  )

  expect(
    children[0].src
  ).toContain(
    'POSTER_SOURCE'
  )
}

function renderWithoutSrc() {
  expect(
    getByType(render(Event()), Event).getDOMNode().children.length
  ).toBe(
    1
  )

  expect(
    getByType(render(Event()), Event).getDOMNode().tagName
  ).toBe(
    'DIV'
  )
}
