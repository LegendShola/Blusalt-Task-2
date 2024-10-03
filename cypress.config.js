const cucumber = require('cypress-cucumber-preprocessor').default;
const { defineConfig } = require('cypress');
const merge = require('mochawesome-merge'); // No need for .default

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.uitestingplayground.com',
    specPattern: '**/*.feature',
    supportFile: false,

    setupNodeEvents(on, config) {
      // Cucumber file preprocessor
      on('file:preprocessor', cucumber());

      // Generate test results in mochawesome format
      on('after:run', async () => {
        const report = await merge({
          files: ['./cypress/results/*.json']
        });
        
        const reportGenerator = require('mochawesome-report-generator'); // Import here
        await reportGenerator.create(report);
      });
    },
    defaultCommandTimeout: 20000,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: false,
      json: true,
    },
  },
  env: {
    TAGS: 'not @skip' // Exclude scenarios with @skip tag
  }
});
