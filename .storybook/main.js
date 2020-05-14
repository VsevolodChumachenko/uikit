const { aliases } = require('../configs/aliases.config');
const rules = require('../configs/rules.config');

module.exports = {
  stories: ['../src/**/*.stories.[tj]s'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: (config) => {
    config.module.rules.push(...rules);
    config.resolve.alias = { ...config.resolve.alias, ...aliases };

    return config;
  },
};
