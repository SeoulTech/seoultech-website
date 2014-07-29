module.exports = function(component, id) {
  var callback = '__j' + document.getElementsByClassName('jsonp').length,
    getUrl = require('./getUrl'),
    script = document.createElement('script')

  script.type = 'text/javascript'
  script.className = 'jsonp'
  script.src = getUrl('events') + '&callback=' + callback

  window.addEventListener('fetch', function() {
    [].slice.call(document.getElementsByClassName('jsonp'))
      .forEach(function(s) {s.parentNode.removeChild(s)})
    script = null
  })

  window[callback] = function(data) {
    window.dispatchEvent(new CustomEvent('fetch', {
      detail: {data: data, component: component, id: id}
    }))
  }

  document.head.appendChild(script)

}
