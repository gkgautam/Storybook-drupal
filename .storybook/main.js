const path = require('path');

module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y"
  ],
  framework: "@storybook/html",
  core: {
    builder: "@storybook/builder-webpack5"
  },
  webpackFinal: async (config) => {
    // Add Twig loader
    config.module.rules.push({
      test: /\.twig$/,
      use: [
        {
          loader: 'twig-loader',
          options: {
            namespaces: {
              'atoms': path.resolve(__dirname, '../components/atoms'),
              'molecules': path.resolve(__dirname, '../components/molecules'),
              'organisms': path.resolve(__dirname, '../components/organisms')
            }
          }
        }
      ]
    });
    return config;
  }
};
