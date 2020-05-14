const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const rules = require('./configs/rules.config');
const { aliases } = require('./configs/aliases.config');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    polyfill: '@babel/polyfill',
    main: './src/index.vue',
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[id].chunk.js',
    library: '',
    libraryTarget: 'commonjs',
  },
  resolve: {
    extensions: ['.vue', '.ts', '.js', '.json'],
    alias: {
      vue$:
        process.env.NODE_ENV !== 'production'
          ? 'vue/dist/vue.runtime.js'
          : 'vue/dist/vue.runtime.min.js',
      ...aliases,
    },
    modules: ['node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      ...rules,
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCSSExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
    new webpack.HashedModuleIdsPlugin(),
  ],
};
