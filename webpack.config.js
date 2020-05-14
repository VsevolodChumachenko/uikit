const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const rules = require('./configs/rules.config');
const { aliases } = require('./configs/aliases.config');

module.exports = {
  entry: './src/index.vue',
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[id].chunk.js',
    library: '',
    libraryTarget: 'commonjs',
  },
  resolve: {
    extensions: ['.vue', '.js', '.json'],
    alias: aliases,
    modules: ['node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      ...rules,
    ],
  },
  plugins: [new VueLoaderPlugin()],
};
