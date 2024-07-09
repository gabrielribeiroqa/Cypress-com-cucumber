const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({

  projectId: 'u5x39s',

  // Configuração do relatório 

  reporter: "cypress-mochawesome-reporter",

  screenshotsFolder: "cypress/screenshots",

  videosFolder: "cypress/videos",

  video: true,

  reporterOptions: {

    charts: true,

    reportPageTitle: 'Relatorio Cypress',

    embeddedScreenshots: true,

    inlineAssets: true,

    reportDir: "cypress/relatorio",

    timestamp: "mmddyyyy_HHMMss",

    html: true,
  },

  e2e: {
    baseUrl: 'https://loginxp.vercel.app',

    setupNodeEvents(on, config) {

      on('file:preprocessor', cucumber())

      // Montar reporter do relatório
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
    //configuração do step definitions para que possa reconhecer as features e os steps
    specPattern: "cypress/e2e/step_definitions/**/*.feature"
  },
  // Configuração do tempo de espera global 
  "defaultCommandTimeout": 60000,

});


