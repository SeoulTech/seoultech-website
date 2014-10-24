jest.autoMockOff()

describe('list component', function() {
  it('renders only upcoming events', renderUpcoming)
  it('renders only past events', renderPast)
  it('renders upcoming and past events', renderAll)
})

/*** Implementation ***/
var React = require('react/addons')
var Events = require('../main')
var TestUtils = React.addons.TestUtils
var render = TestUtils.renderIntoDocument
var getByType = TestUtils.findRenderedComponentWithType

var mockUpcoming = Events({
    results: [{time: '9999-10-10'}]
  })

var mockPast = Events({
    results: [{time: '2009-10-10'}]
  })

var mockAll = Events({
    upcomingHeader: 'UPCOMING',
    pastHeader: 'PAST',
    results: [
      {time: '9999-10-10'},
      {time: '2009-10-10'}
    ]
  })

function getChildren(c) {
  return getByType(render(c), Events).getDOMNode().children
}

function renderUpcoming() {
  expect(
    getChildren(mockUpcoming).length
  ).toBe(
    2
  )

  expect(
    getChildren(mockUpcoming)[0].innerHTML
  ).toBe(
    'upcoming events'
  )
}

function renderPast() {
  expect(
    getChildren(mockPast).length
  ).toBe(
    2
  )

  expect(
    getChildren(mockPast)[0].innerHTML
  ).toBe(
    'past events'
  )
}

function renderAll() {
  expect(
    getChildren(mockAll).length
  ).toBe(
    4
  )

  expect(
    getChildren(mockAll)[0].innerHTML
  ).toBe(
    'UPCOMING'
  )

  expect(
    getChildren(mockAll)[2].innerHTML
  ).toBe(
    'PAST'
  )

}
