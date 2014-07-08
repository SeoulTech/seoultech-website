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
    },

    // list of lodash methods used; either to make a custom lodash build
    // or replace lodash with something else
    assign: _.assign,
    cloneDeep: _.cloneDeep,
    compact: _.compact,
    compose: _.compose,
    filter: _.filter,
    isEmpty: _.isEmpty,
    keys: _.keys,
    map: _.map,
    merge: _.merge,
    partial: _.partial,
    reduceRight: _.reduceRight,
    zipObject: _.zipObject
  }

module.exports = util
