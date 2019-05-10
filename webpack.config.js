module.exports = (env, argv) => {
  const prod = (argv.mode === 'production');

  return {
    entry: './index.js',
    output: {
      libraryTarget: 'umd',
      library: 'jismesh',
      filename: prod ? 'jismesh.min.js' : 'jismesh.js',
      path: __dirname + '/dist',
    },
    devtool: 'source-map'
  };
};
