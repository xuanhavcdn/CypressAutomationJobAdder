const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    // reportDir: "cypress\reports",
    overwrite: true,
    html: true,
    json: false,
    embeddedScreenshots: true,
    reportPageTitle: "My test Suite Result"

  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
      // implement node event listeners here
    },
    baseUrl: "https://react-redux.realworld.io"
  },
  //reponsive same with laptop device
  viewportWidth: 1366,
  viewportHeight: 768
});
