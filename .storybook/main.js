const { aliases } = require('../configs/aliases.config');
const rules = require('../configs/rules.config');

module.exports = {
  stories: ['../src/**/src/stories/*.stories.(js|mdx)'],
  addons: [
    '@storybook/addon-actions/register',
    '@storybook/addon-docs',
    '@storybook/addon-knobs/register',
    '@storybook/addon-backgrounds/register',
  ],
  webpackFinal: (config) => {
    config.module.rules.push(...rules);
    config.resolve.alias = { ...config.resolve.alias, ...aliases };

    return config;
  },
};
