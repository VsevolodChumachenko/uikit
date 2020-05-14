const VueLoaderPlugin = require('vue-loader/lib/plugin');
const pkg = require('./package.json');
const rules = require('./configs/rules.config');
const { aliases } = require('./configs/aliases.config');

module.exports = {
  entry: './src/index.vue',
  output: {
    filename: pkg.main,
    library: '',
    libraryTarget: 'commonjs',
  },
  resolve: {
    extensions: ['.vue', '.ts', '.js', '.json'],
    alias: aliases,
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
  plugins: [new VueLoaderPlugin()],
};
