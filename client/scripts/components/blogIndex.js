var React = require('react'),
  $ = React.DOM,
  _ = require('../util/util'),
  index = require('../../content/target/index');



module.exports = React.createClass({
  render: function() {
    return $.div(null, _.keys(index).reverse()
      .filter(RegExp.prototype.test.bind(/.*blog*/))
      .map(function(path) {
        var year = path.match(/[0-9]+/)
        return [
          $.h3(null, year),
          $.ul(null, _.map(index[path], function(entry) {
            return $.li({key: entry},
              $.a({href: './#/blog/' + year + '/' + entry}, entry))
          }))
        ]
      }))
  }
});
