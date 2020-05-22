const path = require('path');

module.exports = {
  aliases: {
    '@': path.resolve(__dirname, '../'),
    vue$:
      process.env.NODE_ENV !== 'production'
        ? 'vue/dist/vue.js'
        : 'vue/dist/vue.esm.js',
    '@uikit/button': path.resolve(__dirname, '../src/Button/src/index'),
    '@uikit/spinner': path.resolve(__dirname, '../src/Spinner/src/index'),
    '@uikit/input': path.resolve(__dirname, '../src/Input/src/index'),
  },
};
