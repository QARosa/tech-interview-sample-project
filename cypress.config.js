const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://notes-serverless-app.com/login',
    defaultCommandTimeout: 10000,
    experimentalStudio: true

  
  }
})
