module.exports = {
    entry: "./client/scripts/components/index.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
      loaders: [{ 
        test: /\.js$/, loader: 'es6-loader' 
      }]
    }
};
