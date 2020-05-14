const autoprefixer = require('autoprefixer');
const path = require('path');

module.exports = [
  {
    test: /\.js$/,
    exclude: (file) => /node_modules/.test(file) && !/\.vue\.js/.test(file),
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', 'vue'],
      },
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
      'vue-style-loader',
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
