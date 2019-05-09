module.exports = {
  entry: './index.js',
  output: {
    libraryTarget: 'umd',
    library: 'jismesh',
    filename: 'jismesh.js',
    path: __dirname + '/dist',
  }
};
