var _ = require('lodash'),
util = {

  get: (...args) => args.reduce((obj, key) =>
    _.has(obj, key)? obj[key] : null),

  maybe(value) {
    return {
      map: function(f) {
        return value !== null? util.maybe(f(value)) : this
      },
      fmap: function(f) {
        return value !== null? util.maybe(value.map(f)) : this
      },
      return: () => typeof value == 'function'? value() : value
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