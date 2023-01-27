
### Installing different packages
```
npm install mocha --save-dev
npm install cypress-multi-reporters --save-dev
npm install mochawesome --save-dev
npm install mochawesome-merge --save-dev
npm install mochawesome-report-generator --save-dev
```


### Inside the `cypress.config.js`
```
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    reporter: "mochawesome",
    mochawesomeReporterOptions: {
      reportDir: "cypress/reports/mocha",
      quite: true,
      overwrite: false,
      html: false,
      json: true,
    },
  },
```

