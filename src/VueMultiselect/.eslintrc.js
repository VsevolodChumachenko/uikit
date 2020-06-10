module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2020,
  },
  extends: ['plugin:prettier/recommended', 'prettier', 'prettier/vue'],
  plugins: ['vue', 'import', 'prettier'],
  // add your custom rules here
  rules: {
    'no-console': 'warn',
  },
};
