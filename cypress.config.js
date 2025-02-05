const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
 //global configuration
 env:{
  URL:'http://127.0.0.1:8000/login'
  }
  },
});

// const { defineConfig } = require("cypress");

// module.exports = defineConfig({

//   reporter: 'cypress-mochawesome-reporter',
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here

//     require('cypress-mochawesome-reporter/plugin')(on);
//     },
//   },
//   //global configuration
//   env:{
//   URL:'http://127.0.0.1:8000/login'
//   }

// });

