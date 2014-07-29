_ = require('./util')

module.exports = function(component, id) {
  var p = {
    domain: 'http://api.meetup.com/2/',
    events: {
      'status': 'upcoming%2Cpast',
      'order': 'time',
      'limited_events': 'False',
      'group_urlname': 'seoul-tech-society',
      'desc': 'false',
      'offset': '0',
      'format': 'json',
      'only': 'id%2Cname%2Ctime%2Cyes_rsvp_count%2Cdescription%2Cstatus',
      'page': '200',
      'fields': '',
      'sig_id': '106319802',
      'sig': 'bc33fa193e81164b365d53693ae8c9e751c7b1ce'
    }
  }

  return _.get({
    events: p.domain + 'events/?' + Object.keys(p.events).map(function(key) {
      return key + '=' + p.events[key]
    }).join('&')
  }, component)
}

