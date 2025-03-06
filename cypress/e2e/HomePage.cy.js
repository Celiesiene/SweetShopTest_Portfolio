describe('Home Page Test', () => {
  it('Home Page funcionality', () => {
    // Verify that the page is displayed in the browser.
    cy.visit('https://sweetshop.netlify.app/')
    cy.url().should('eq', 'https://sweetshop.netlify.app/');
    // Verify that the navigation bar is present on the homepage.
    cy.get('nav').should('be.visible');
    cy.get('a[href="/"]').contains('Sweet Shop').should('be.visible');
    //Verify that the page contains a product list or recommendations.
    cy.get('.lead').contains('Our most popular choice of retro sweets.').should('be.visible');
    cy.get('.row').children('div').should('have.length.greaterThan', 1);
    // cy.get('.messageContainer h2').contains('Most popular').should('be.visible'); //testas turi nepraeiti, nes Most Popular neatsivaizduoja.

  });

  it('Verify that the main links work and navigate to the correct pages', () => {
    cy.visit('https://sweetshop.netlify.app/')
    const links = [
      { label: 'Sweets', url: 'https://sweetshop.netlify.app/sweets' },
      { label: 'About', url: 'https://sweetshop.netlify.app/about' },
      { label: 'Login', url: 'https://sweetshop.netlify.app/login' },
      { label: 'Basket', url: 'https://sweetshop.netlify.app/basket' }
    ];

    links.forEach(link => {
      cy.contains('nav a', link.label).click();
      cy.url().should('include', link.url);
      cy.go('back');
    });

  });

  it('1.5 - Verify that clicking “Browse sweets” displays the full product list', () => {
    cy.visit('https://sweetshop.netlify.app/')
    cy.get('a[href="/sweets"]').contains('Browse Sweets').click();
    cy.url().should('include', '/sweets');
    cy.get('.row').children('div').should('have.length.greaterThan', 1);
    cy.get('.row').each(($row) => {
      cy.wrap($row).children().should('have.length.greaterThan', 1);
    })
  })

  it('Verify that a product can be added to the basket directly from the homepage.', () => {
    cy.visit('https://sweetshop.netlify.app/');
    cy.get('[data-id="4"]').click();
    // Verify that the item count in the basket updates after adding a product.
    cy.get('.badge').invoke('text').should('eq', '1');
  })

})



