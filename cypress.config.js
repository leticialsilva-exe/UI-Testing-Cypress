const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl : 'http://lojaebac.ebaconline.art.br',
    setupNodeEvents(on, config) { 
      // implement node event listeners here
    },
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports", // Path to save the reports
      reportFilename: "[name]_testResult", // Name of the HTML file
      html: false
    }
  }
});
