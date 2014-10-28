var _ = require('lodash')

var util = {
  get: function(/* obj, nested keys */) {
    return [].slice.call(arguments).reduce(function(obj, key) {
      return _.has(obj, key)? obj[key] : null
    })
  },
  reverse: function(arr) {
    return arr.slice(0).reverse()
  },
  sortBy: _.sortBy
}

module.exports = util