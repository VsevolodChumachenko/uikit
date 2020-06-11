const rules = require('./configs/rules.config');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

module.exports = {
  entry: './src/index.vue',
  output: {
    path: './dist',
    publicPath: './',
    filename: 'index.min.js',
    library: './src/index.vue',
    libraryTarget: 'umd'
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue',
    },
    extensions: ['.vue', '.js', '.json'],
    modules: ['node_modules', 'src'],
  },
  mode: "production",
  module: {
    rules,
  },
  plugins: [
    new VueLoaderPlugin(),
    new VueSSRServerPlugin(),
    new ExtractTextPlugin({
      filename: 'styles.min.css',
    }),
    new OptimizeCssAssetsPlugin({
      cssProcessor: require('cssnano'),
    }),
  ],
  optimization: {
    minimizer: [new UglifyJsPlugin()]
  }
};

const { aliases } = require('./configs/aliases.config');

module.exports = {
  entry: './src/index.vue',
  output: {
    filename: '[name].min.js',
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
