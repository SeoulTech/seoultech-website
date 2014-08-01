var webpack = require('webpack')

module.exports = {
  context: __dirname + '/../scripts/loaders',
  entry: {
    home: './loaderHome.js',
    events: './loaderEvents.js'
  },
  output: {
      path: __dirname + '/../scripts/bundles',
      filename: "[name].bundle.js"
  },
  module: {
    loaders: [
    {test: /\.js$/, loader: 'es6-loader'},
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ],
  externals: {
    'react': 'React'
  }
}
