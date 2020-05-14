module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: [
    'plugin:prettier/recommended',
    'prettier',
    'prettier/vue',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['vue', 'import', 'prettier', '@typescript-eslint'],
  // add your custom rules here
  rules: {
    'no-console': 'warn',
  },
};
