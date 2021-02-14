## Assignment_cypress
## Getting Started
* To install Cypress and add it as dev dependency: `npm i cypress -D`
* To run test scripts in headless mode: `npx cypress run`
* To run test scripts in browser: `npx cypress open`
* To install cucumber plugin `npm install --save-dev cypress-cucumber-preprocessor`

The cypress-cucumber-preprocessor adds support for using feature files when testing with Cypress.
All features files are present in `cypress/integration/` contains test scenario description using gherkin and step defination files are also placed in `cypress/integration/`

Test script are writtrn using custom commands in  cypress/support/commands.js
These new defined commands can be reused in  spec files as explained below:

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


To view more detail on cypress [click here](cypress.io)
