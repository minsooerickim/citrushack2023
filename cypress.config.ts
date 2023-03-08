/* eslint-disable @typescript-eslint/no-unused-vars */
import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'krfkwu',
  e2e: {
    baseUrl: 'http://localhost:3000/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // https://github.com/cypress-io/cypress-example-recipes/blob/master/examples/server-communication__env-variables/cypress.config.js
      config.env = config.env || {};
      config.env.SESSION_TOKEN = "";
      console.log('extended config.env with process.env.{SESSION_TOKEN}');
      return config;
    },
  },
});
