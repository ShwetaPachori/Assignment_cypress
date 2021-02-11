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
	cy.VerifyAppLaunched();
})

Then('User add new work item as {string}', (newItem) => {
	cy.addItem(newItem)
	// cy.addItem(newItem+Math.random().toFixed(2)*100)
})

Then('New item should be added in the list as {string}', (newItem) => {

	cy.ValidateItemAdded(newItem);

})

And('list footer should be updated', () => {
	cy.wait(2000)
	cy.validateFooter()
})

And('Text filed should be cleared', () => {

	cy.get('.new-todo').should('have.text', '')

})


Then('User marks the item {string}  as complete', (newItem) => {

	cy.markComplete(newItem)

})