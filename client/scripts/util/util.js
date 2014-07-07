var _ = require('lodash'),
  util = {
    get: function(/* obj, nested keys */) {
      return [].slice.call(arguments).reduce(function(obj, key) {
        return _.has(obj, key)? obj[key] : null
      })
    },
    maybe: function(value) {
      return {
        map: function(f) {
          return value != null? util.maybe(f.call(null, value)) : this;
        },
        fmap: function(f) {
          return value != null? util.maybe(value.map(f)) : this
        },
        return: function() {
          return typeof value == 'function'? value() : value;
        }
      }
    }
  }

module.exports = util
