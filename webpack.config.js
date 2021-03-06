const path = require('path');

module.exports = {
  entry: './client/index.js',
  mode: "development",
  output: {
    path: path.join(__dirname + '/public'),
    filename: 'bundle.js'
  },
  devtool: 'source-map'
}