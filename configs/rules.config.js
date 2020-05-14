const autoprefixer = require('autoprefixer');
const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = [
  {
    test: /\.js$/,
    exclude: (file) => /node_modules/.test(file) && !/\.vue\.js/.test(file),
    use: {
      loader: 'babel-loader',
    },
  },
  {
    test: /\.ts$/,
    loader: 'ts-loader',
    options: { appendTsSuffixTo: [/\.vue$/] },
  },
  {
    test: /\.scss$/,
    use: [
      process.env.NODE_ENV !== 'production'
        ? 'vue-style-loader'
        : MiniCSSExtractPlugin.loader,
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          plugins: [
            autoprefixer({
              grid: 'autoplace',
            }),
          ],
        },
      },
      'sass-loader',
      {
        loader: 'style-resources-loader',
        options: {
          patterns: [
            path.resolve(__dirname, '../assets/styles/vars.scss'),
            path.resolve(__dirname, '../assets/styles/mixins.scss'),
          ],
        },
      },
    ],
  },
  {
    test: /\.pug$/,
    loader: 'pug-plain-loader',
  },
  {
    enforce: 'pre',
    test: /\.(js|vue)$/,
    loader: 'eslint-loader',
    exclude: /node_modules/,
  },
];
