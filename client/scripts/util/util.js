export function get(...args) {
  return args.reduce((obj, key) => _.has(obj, key)? obj[key] : null)
};

export function maybe(value) {
  return {
    map: function(f) {return value !== null? maybe(f(value)) : this},
    fmap: function(f) {return value !== null? maybe(value.map(f)) : this},
    return: () => typeof value == 'function'? value() : value
  }
};

// list of lodash methods used; either to make a custom lodash build
// or replace lodash with something else
export {
  assign,
  cloneDeep,
  compact,
  compose,
  filter,
  isEmpty,
  keys,
  map,
  merge,
  partial,
  reduceRight,
  zipObject
} from 'lodash';