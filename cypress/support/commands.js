// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('AddSomeProducts', ()=>{
    cy.get('a[href="/sweets"]').contains('Sweets').click();
    // Add multiple products to the basket.
    cy.get('a[data-id="2"]').click();
    cy.get('a[data-id="4"]').click();
    cy.get('a[data-id="6"]').click();
    //Verify that the item count in the basket updates after adding a product.
    cy.get('.badge').invoke('text').should('eq', '3');
 })
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })