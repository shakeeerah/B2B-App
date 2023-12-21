const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  
      baseUrl: "https://staging.trymima.com",
      viewportHeight: 900,
      viewportWidth: 1500,
      watchForFileChanges: false,
      defaultCommandTimeout:15000
},
 

  
});
