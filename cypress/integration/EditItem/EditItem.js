import {
	Given,
	Then,
	And
} from "cypress-cucumber-preprocessor/steps";
/// <reference types="cypress" />

before(() => {
	cy.setCounter();
	cy.visit(Cypress.env("url"))
})

Given('User is on todomvc page', () => {
	cy.verifyAppLaunched();
})

Then('User add new work item as {string}', (newItem) => {
	cy.addItem(newItem)    
})

Then('New item should be added in the list as {string}', (newItem) => {
	cy.validateItemAdded(newItem);
    cy.listLen();
})

Then('User edit work item {string}  as {string}',(NewItem,UpdateItem) => {
    cy.editItem(NewItem,UpdateItem);
    cy.validateItemAdded(UpdateItem);
})


Then('User edit work item {string} as empty string',(NewItem) => {
    cy.enterEmptyString(NewItem);
})



Then('Empty sting should not be updated',() => {
    cy.get('li').should('have.length', 1)
})
