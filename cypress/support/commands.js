/// <reference types="cypress" />

let newListCount;
let count;
let originalLen ;
let completeLen;

Cypress.Commands.add("setCounter", () => {
	newListCount = 0;
})

//to verify app is launched 
Cypress.Commands.add("verifyAppLaunched", () => {
	cy.get('.new-todo').should('exist');  
})

//to add new item
Cypress.Commands.add("addItem", (newItem) => {
	cy.get('.new-todo').type(newItem).type('{enter}');
	newListCount = newListCount + 1;
})
//to get list length
Cypress.Commands.add("listLen", () => {
    // cy.get('.view').its('length').should('eq',newListCount);
	   
    cy.get('li').its('length').then((size) => {
        originalLen = size
    });
})

//to verify item is added
Cypress.Commands.add("validateItemAdded", (newItem) => {
	cy.get('li').should('contain', newItem)
})

//to verify footer is upadted for each time list is updated
Cypress.Commands.add("validateFooter", () => {
    if(completeLen>0){
        count = originalLen- completeLen
    }else{count=originalLen}

	if (count > 1) {
		cy.get('.footer').contains(count + ' items left')
	} else {
	    cy.get('.footer').contains(count + ' item left') }
// to verfiy 'clear completed' button
	cy.get('li').then(($list) => {
		if ($list.hasClass('completed')) {
			cy.get('.clear-completed').should('exist')
		} else {
			cy.get('.clear-completed').should('not.exist') }
	});
})

//to mark work item as complete
Cypress.Commands.add("markComplete", (newItem) => {

	cy.get('li').contains('label', "design").invoke('index').then((i) => {
		cy.get('li').eq(0).as('list').should('not.have.class', 'completed') 
		cy.get('@list').find('.toggle').check()
		cy.get('@list').should('have.class', 'completed')   
	})
    cy.get('.completed > .view > label').its('length').then((size) => {
        completeLen = size
    });
})

// to clear all work item
Cypress.Commands.add("clearAllCompletedItems",() =>{
    cy.get('.clear-completed').click()  
})

//to delete exsisting work item
Cypress.Commands.add("delete",(newItem) =>{
    cy.get('.view').eq(0).trigger('mouseover')
    .find('button.destroy').invoke('show').trigger('mouseover').click();  
})

//to edit exsisting work item
Cypress.Commands.add("editItem",(newItem,UpdatedItem)=>{
    cy.get('.view').eq(0).find('label')
.dblclick();
    cy.get('.edit')
          .should('have.value', newItem)
          .clear()
          .type(UpdatedItem).type('{enter}')         
})

Cypress.Commands.add("enterEmptyString",(newItem)=>{
    cy.get('.view').eq(1).find('label')
.dblclick();
    cy.get('.edit')
          .should('have.value', newItem)
          .clear()
          .type('{enter}')         
})


Cypress.Commands.add("verifyNoCompletedItemExist", () =>{
	cy.get('li').should('not.have.class', 'completed')
})

Cypress.Commands.add("noClearCompleteButton", () =>{
	cy.get('.clear-completed').should('not.exist')
})