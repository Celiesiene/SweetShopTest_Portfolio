describe('Sweet Page Test', () => {
    it('Verify that clicking “Sweets” navigates to the product list page.', () => {
        cy.visit('https://sweetshop.netlify.app/')
        cy.url().should('eq', 'https://sweetshop.netlify.app/');
        cy.get('a[href="/sweets"]').contains('Sweets').click();

    });

    it('Verify that each product has a name, image, description, and price.', () => {
        cy.visit('https://sweetshop.netlify.app/')
        cy.get('a[href="/sweets"]').contains('Sweets').click();
        cy.get('.row').each(($row) => {
            cy.wrap($row).children().each(($product) => {
                cy.wrap($product).find('h4.card-title').should('be.visible').and('not.be.empty');
                cy.wrap($product).find('p.card-text').should('be.visible').and('not.be.empty');
                cy.wrap($product).find('p small.text-muted').should('be.visible').and('not.be.empty');
                cy.wrap($product).find('img.card-img-top').invoke('prop', 'naturalWidth').should('be.greaterThan', 0);
            });

        }); //testas ir turi nepraeiti, nes neatsivaizduoja viena nuotrauka
    });

    it('Verify that the item count in the basket updates after adding a product', () => {
        cy.visit('https://sweetshop.netlify.app/');
        cy.AddSomeProducts()

    })






})
