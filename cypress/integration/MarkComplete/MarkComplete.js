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
     cy.addItem("test"+newItem+Math.random().toFixed(2)*100)
     cy.addItem("design"+Math.random().toFixed(2)*100)
})

Then('New item should be added in the list as {string}', (newItem) => {
	cy.validateItemAdded(newItem);
   cy.listLen();
})

And('list footer should be updated', () => {
	cy.wait(2000)
	cy.validateFooter()
})

Then('User marks the item {string}  as complete', (newItem) => {
	cy.markComplete(newItem)
})