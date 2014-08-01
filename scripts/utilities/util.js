var _ = require('./lodash.custom.min'),
  util = {
    get: function(/* obj, nested keys */) {
      return [].slice.call(arguments).reduce(function(obj, key) {
        return _.has(obj, key)? obj[key] : null
      })
    },
    reverse: function(arr) {
      return arr.slice(0).reverse()
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
    },

    // list of lodash methods used; either to make a custom lodash build
    // or replace lodash with something else
    has: _.has,
    sortBy: _.sortBy,
  }

module.exports = util