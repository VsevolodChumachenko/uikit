const autoprefixer = require('autoprefixer');
const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

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
    oneOf: [
      // это применяется к `<template lang="pug">` в компонентах Vue
      {
        resourceQuery: /^\?vue/,
        use: ['pug-plain-loader'],
      },
    ],
  },
  {
    enforce: 'pre',
    test: /\.(js|vue)$/,
    loader: 'eslint-loader',
    exclude: /node_modules/,
  },
];
