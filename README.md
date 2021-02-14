## Assignment_cypress
## Getting Started
* To install Cypress and add it as dev dependency: `npm i cypress -D`
* To run test scripts in headless mode: `npx cypress run`
* To run test scripts in browser: `npx cypress open`


```javascript
Cypress.Commands.add("listLen",() =>{

    originalLen = cy.get('.view > label').length;
    completeLen = cy.get('.completed > .view > label').length 
    count = Number(originalLen)-Number(completeLen)
   
})
```
To view more detail on cypress [click here](cypress.io)
