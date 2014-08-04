var _ = require('./util'),

processKeyword = function(status) {
  var keywords = {
    newest: function(data) {return _.sortBy(data, 'date')},
    oldest: function(data) {return _.reverse(keywords.newest(data))},
    default: function(data) {
      return data.filter(function(d) {return d.status == status})}}

  return keywords[status] || keywords['default']
},

extract = function(config, data) {
  var query = config.query.split(/\s/),
    n = (query[0] == 'all')? 0 : -query[0],
    status = query[1],
    results = processKeyword(status)(data).slice(n)

  if (results.length > 0) return {results: results, title: config.title}

  return extract(config['default'], data)
}

module.exports = extract