const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.uitestingplayground.com',
    specPattern: '**/*.feature', 
    // supportFile: 'cypress/support/index.js',
    supportFile: false,

    setupNodeEvents(on, config) {
      // Cucumber file preprocessor
      on('file:preprocessor', cucumber())

      // Generate test results in mochawesome format
      on('after:run', () => {
        return new Promise((resolve) => {
          // Merge mochawesome reports after the run
          resolve(require('mochawesome-merge')({
            files: ['./cypress/results/*.json']
          }))
        }).then(report => {
          require('mochawesome-report-generator').create(report)
        })
      })
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
})
