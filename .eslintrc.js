module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: "babel-eslint",
  extends: ['plugin:prettier/recommended', 'prettier', 'prettier/vue'],
  plugins: ['vue', 'import', 'prettier'],
  // add your custom rules here
  rules: {
    'no-console': 'warn',
  },
};
