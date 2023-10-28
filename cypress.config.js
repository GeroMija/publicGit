const { defineConfig } = require("cypress")
module.exports = defineConfig({
    defaultCommandTimeout: 15000,
    requestTimeout: 15000,
    viewportHeight: 760,
    viewportWidth: 1280,
    pageLoadTimeout: 15000,
    chromeWebSecurity: false,
    video: false,
    responseTimeout: 25000,

    retries: {
        runMode: 2,
        openMode: 0,
    },

    env: {
        BASIC_AUTH_USER: "name",
        BASIC_AUTH_PASSWORD: "pass",
        CY_BASE_URL: "https://",
    },

    projectId: "1",

    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
            return require('./cypress/plugins/index.js')(on, config)
        },
    },
});