## Assignment_cypress
## Getting Started
* To install Cypress and add it as dev dependency: `npm i cypress -D`
* To install cucumber plugin `npm install --save-dev cypress-cucumber-preprocessor`

## Configuration
* Configuration can be found at `cypress.json`
## Test Scripts
The cypress-cucumber-preprocessor adds support for using feature files when testing with Cypress.
All features files are present in `cypress/integration/` contains test scenario description using gherkin and step defination files are also placed in `cypress/integration/`

Test script are writtrn using custom commands in  cypress/support/commands.js
These new defined commands can be reused in  spec files as explained below:
```Gherkin
Feature: Guess the word

  # The first example has two steps
  Scenario: Maker starts a game
    When the Maker starts a game
    Then the Maker waits for a Breaker to join
```
```javascript
Cypress.Commands.add("listLen",() =>{
    originalLen = cy.get('.view > label').length;
    completeLen = cy.get('.completed > .view > label').length 
    count = Number(originalLen)-Number(completeLen)   
})
```
```javascript
Then('to verify list length', (newItem) => {
	cy.listLen();	    
    })
```
## Test Reports
* To install junit `npm install --save-dev cypress-multi-reporters mocha-junit-reporter`
* Screenshots are placed in `cypress\screenshots` folder
* Videos are placed in `cypress\videos` folder
* Junit reports can also be checked in 'Test' tab in Azure Pipeline
## Execution
* To run test scripts in headless mode: `npx cypress run`
* To run test scripts in browser: `npx cypress open`
* To execute in docker: `docker-compose -f docker-compose.yml up`
* To run from azure pipeline use `cyprress/azure-pipeline.yml` pipeline status is added here
[![Build Status](https://dev.azure.com/401323/CypressAssignment/_apis/build/status/CypressAssignment-CI?branchName=main)](https://dev.azure.com/401323/CypressAssignment/_build/latest?definitionId=2&branchName=main)
* To run using GitHub Action use file Assignment_cypress/.github/workflows status added here ![TestExecution](https://github.com/ShwetaPachori/Assignment_cypress/workflows/TestExecution/badge.svg)



To view more detail on cypress [click here](cypress.io)
