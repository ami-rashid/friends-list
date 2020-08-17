module.exports = {
  mode: "development",
  entry: './src/app.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  node: {
    fs: "empty",
    net: 'empty'
 }
}