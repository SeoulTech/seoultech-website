const _ = require('./util'),
  p = {
    domain: 'http://api.meetup.com/2/',
    key: '?key=32e6f1c637b17515d3c112970763b6d',
    group: 'group_urlname=seoul-tech-society',
    status: 'status=upcoming,past',
    eventId: 'event_id=165322992',
    only1: 'only=id,name',
    only2: 'only=id,name,description',
    only3: 'only=id,name,time,yes_rsvp_count'
  },
  urls = function(component, id) {
    return _.get({
      events: p.domain + 'events/' + [p.key, p.group, p.status, p.only3].join('&'),
      event: p.domain + 'event/' + id + [p.key, p.only2].join('&'),
      people: p.domain + 'rsvps/' + [p.key, 'event_id=' + id].join('&'),
      person: p.domain + 'member/' + id + [p.key].join('&'),
      venues: p.domain + 'venues/' + [p.key, p.group, p.only1].join('&'),
    }, component)
  }

module.exports = function(component, id) {
  var callback = '__j' + document.getElementsByClassName('jsonp').length,
    script = document.createElement('script')

  script.type = 'text/javascript'
  script.className = 'jsonp'
  script.src = urls(component, id) + '&callback=' + callback

  window[callback] = function(data) {
    window.dispatchEvent(new CustomEvent('fetch', {
      detail: {data, component, id}
    }))
  }

  window.addEventListener('fetch', function() {
    [].slice.call(document.getElementsByClassName('jsonp'))
      .forEach((s) => s.parentNode.removeChild(s))
    script = null
  })

  document.head.appendChild(script)

}
