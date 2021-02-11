/// <reference types="cypress" />

let NewlistCount;
let count;
let originalLen ;
let completeLen;

Cypress.Commands.add("setCounter", () => {
	NewlistCount = 0;

})


Cypress.Commands.add("VerifyAppLaunched", () => {

	cy.get('.new-todo').should('exist');

})

Cypress.Commands.add("addItem", (newItem) => {

	cy.get('.new-todo').type(newItem).type('{enter}');
	NewlistCount = NewlistCount + 1;
})

Cypress.Commands.add("listLen", () => {
   
    cy.get('.view').its('length').should('eq',NewlistCount);
    
    cy.get('.view').its('length').then((size) => {
        originalLen = size
    });

})

Cypress.Commands.add("ValidateItemAdded", (newItem) => {

	cy.get('.view').should('contain', newItem)
})

Cypress.Commands.add("validateFooter", () => {
    if(completeLen>0){
        count = originalLen- completeLen
    }else{count=originalLen}

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

		cy.get('li').eq(i).should('not.have.class', 'completed') // not correct
		cy.get('.view').eq(i).find('.toggle').check()
		cy.get('li').eq(i).should('have.class', 'completed')
	})
    cy.get('.completed > .view > label').its('length').then((size) => {
        completeLen = size
    });
})