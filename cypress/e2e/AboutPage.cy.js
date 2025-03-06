describe('About Page Test', ()=>{
    it(' Verify that clicking “About” navigates to the site description page.', ()=>{
        cy.visit('https://sweetshop.netlify.app/');
        cy.get('a[href="/about"]').contains('About').click();
        //mobilioje versijoje yra alert message. Kompiuteryje nėra
        cy.get('.my-4 h1').contains('Sweet Shop Project').should('be.visible');
        // Verify that the site description is visible.
        cy.get('.my-4 p').should('be.visible').and('not.be.empty')
    })

    describe(' Verify Mobile Alert', () => {
        beforeEach(() => {
          // Nustatome ekrano dydį, imituodami mobilųjį įrenginį
          cy.viewport('iphone-xr'); 
          cy.visit('https://sweetshop.netlify.app/about'); 
        });
      
        it('should display the mobile alert banner', () => {
          cy.get('.mobileShow')
            .should('be.visible')
            .and('contain', '20% Off!')
            .and('contain', 'Get 20% off your first sweet shop order!');
        });
      }); //testas nepraeina, telefone žinutė nesimato
      
})

