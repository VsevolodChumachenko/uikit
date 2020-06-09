const path = require('path');

module.exports = {
  aliases: {
    '@': path.resolve(__dirname, '../'),
    vue$:
      process.env.NODE_ENV !== 'production'
        ? 'vue/dist/vue.js'
        : 'vue/dist/vue.esm.js',
    '@strahovkaru/button': path.resolve(__dirname, '../src/Button/src/index'),
    '@strahovkaru/spinner': path.resolve(__dirname, '../src/Spinner/src/index'),
    '@strahovkaru/input': path.resolve(__dirname, '../src/Input/src/index'),
    '@strahovkaru/select': path.resolve(__dirname, '../src/Select/src/index'),
    '@strahovkaru/steps': path.resolve(__dirname, '../src/Steps/src/index'),
    '@strahovkaru/checkbox': path.resolve(
      __dirname,
      '../src/Checkbox/src/index'
    ),
    '@strahovkaru/typography': path.resolve(
      __dirname,
      '../src/Typography/src/index'
    ),
    '@strahovkaru/radio-group': path.resolve(
      __dirname,
      '../src/RadioGroup/src/index'
    ),
    '@strahovkaru/single-datepicker': path.resolve(
      __dirname,
      '../src/SingleDatepicker/src/index'
    ),
  },
};
