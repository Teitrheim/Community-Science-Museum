const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://dulcet-blini-6d6477.netlify.app",
    specPattern: "cypress/integration/**/*.cy.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // You can still modify the config here if needed
    },
  },
});
