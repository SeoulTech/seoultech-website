var _ = require('lodash')
module.exports = {
  get: function(obj, key) {
    return _.has(obj, key)? obj[key] : null
  }
}
