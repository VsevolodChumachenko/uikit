const { aliases } = require('../configs/aliases.config');
const rules = require('../configs/rules.config');

module.exports = {
  stories: ['../src/**/src/stories/*.stories.(js|mdx)'],
  addons: ['@storybook/addon-actions', '@storybook/addon-docs'],
  webpackFinal: (config) => {
    config.module.rules.push(...rules);
    config.resolve.alias = { ...config.resolve.alias, ...aliases };

    return config;
  },
};
