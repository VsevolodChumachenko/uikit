const autoprefixer = require('autoprefixer');

module.exports = [
  {
    test: /\.vue$/,
    loader: 'vue-loader',
  },
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
