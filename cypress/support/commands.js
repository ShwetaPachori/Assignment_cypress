/// <reference types="cypress" />

let NewlistCount;
let count;
let originalLen;
let completeLen;

Cypress.Commands.add("setCounter", () => {
	NewlistCount = 0;

})


Cypress.Commands.add("VerifyAppLaunched", () => {

	cy.get('.new-todo').should('exist');

})

Cypress.Commands.add("addItem", (newItem) => {

	cy.get('.new-todo').type(newItem).type('{enter}')
	NewlistCount = NewlistCount + 1;
})

Cypress.Commands.add("listLen", () => {

	originalLen = cy.get('.view > label').length;
	completeLen = cy.get('.completed > .view > label').length
	count = Number(originalLen) - Number(completeLen)

})



Cypress.Commands.add("ValidateItemAdded", (newItem) => {

	cy.get('.view').should('contain', newItem)
})



Cypress.Commands.add("validateFooter", () => {

	cy.listLen();
	console.log("-----------------------------" + count);
	if (count > 1) {
		cy.get('.footer').contains(count + ' items left')
	} else {
		cy.get('.footer').contains(count + ' item left')
	}


	cy.get('li').then(($list) => {


		if ($list.hasClass('completed')) {
			cy.get('.clear-completed').should('exist')
		} else {
			cy.get('.clear-completed').should('not.exist')
		}
	});

})


Cypress.Commands.add("markComplete", (newItem) => {



	cy.get('.view').contains('label', newItem).invoke('index').then((i) => {

		cy.get('li').should('not.have.class', 'completed') // not correct
		cy.get('.view').eq(i).find('.toggle').check()
		cy.get('li').should('have.class', 'completed')
	})


})