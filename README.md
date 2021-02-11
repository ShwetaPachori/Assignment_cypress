## Assignment_cypress
## Getting Started
* To install Cypress and add it as dev dependency: `npm i cypress -D`
```javascript
Cypress.Commands.add("listLen",() =>{

    originalLen = cy.get('.view > label').length;
    completeLen = cy.get('.completed > .view > label').length 
    count = Number(originalLen)-Number(completeLen)
   
})
```
To view more detail on cypress [click here](cypress.io)
