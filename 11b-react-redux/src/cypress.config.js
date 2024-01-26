const { defineConfig } = require("cypress");
const webpackConfig = require('../webpack.config');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
      webpackConfig,
    },
  },
});
