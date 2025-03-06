describe('Basket Page Test', () => {

    beforeEach(() => {
        cy.visit('https://sweetshop.netlify.app/');
    });

    it('Verify that checkout is working', () => {
        cy.AddSomeProducts();
        //Verify that clicking “Basket” navigates to the basket page.
        cy.get('a[href="/basket"]').contains('Basket').click();
        cy.get('.text-muted').contains('Your Basket').should('exist').and('be.visible')
        cy.get('#basketCount').invoke('text').should('eq', '3');
        cy.get(':nth-child(1) > #name').type('monika');
        cy.get(':nth-child(2) > #name').type('monikele');
        cy.get('#email').type('monika@monika.lt');
        cy.get('#address').type('Beaver str.');
        cy.get('#address2').type('2');
        cy.get('#country').select('United Kingdom').should('have.value', 'United Kingdom');
        cy.get('#city').select('Bristol').should('have.value', 'Bristol');
        cy.get('#zip').type('123123');
        cy.get('#cc-name').type('monika');
        cy.get('#cc-number').type('123123');
        cy.get('#cc-expiration').type('2025 06 06');
        cy.get('#cc-cvv').type('123');
        cy.get('.needs-validation > .btn').click();
        // cy.url().should('eq', 'https://sweetshop.netlify.app/checkout');
        //testas turi nepraeiti nes checkout mygtukas niekur nenuveda


    });

    it('Verify checkout without details ', () => {
        cy.AddSomeProducts();
        //Verify that clicking “Basket” navigates to the basket page.
        cy.get('a[href="/basket"]').contains('Basket').click();
        cy.get('.text-muted').contains('Your Basket').should('exist').and('be.visible')
        cy.get('#basketCount').invoke('text').should('eq', '3');
        cy.get('.needs-validation > .btn').click();
        cy.get('.invalid-feedback').contains('Valid first name is required.').should('be.visible');
        cy.get('.invalid-feedback').contains('Valid last name is required.').should('be.visible');
        cy.get('.invalid-feedback').contains('Please enter a valid email address for shipping updates.').should('be.visible');
        cy.get('.invalid-feedback').contains('Please enter your shipping address.').should('be.visible');
        cy.get('.invalid-feedback').contains('Please select a valid country.').should('be.visible');
        cy.get('.invalid-feedback').contains('Please provide a valid state.').should('be.visible');
        cy.get('.invalid-feedback').contains('Zip code required.').should('be.visible');
        cy.get('.invalid-feedback').contains('Name on card is required').should('be.visible');
        cy.get('.invalid-feedback').contains('Credit card number is required').should('be.visible');
        cy.get('.invalid-feedback').contains('Expiration date required').should('be.visible');
        cy.get('.invalid-feedback').contains('Security code required').should('be.visible');
        
    });

    it('Verify that Standard Shipping works properly', () => {
        cy.AddSomeProducts();
        //Verify that clicking “Basket” navigates to the basket page.
        cy.get('a[href="/basket"]').contains('Basket').click();
        cy.get('.text-muted').contains('Your Basket').should('exist').and('be.visible')
        //Verify that the shopping basket icon shows the correct number of items added.
        cy.get('#basketCount').invoke('text').should('eq', '3');
        //Select "Standard Shipping" and confirm the selection.
        cy.get('.order-md-2 > .d-block > :nth-child(2)').click();
        //Verify that the total amount is displayed correctly.
        cy.get('li.list-group-item').contains('Total (GBP)').parent().find('strong').invoke('text').should('eq', '£4,24');
        //testas turi nepraeiti nes reikšmė yra NaN
    });

    it('Verify that Promo Code is working', () => {
        cy.AddSomeProducts();
        //Verify that clicking “Basket” navigates to the basket page.
        cy.get('a[href="/basket"]').contains('Basket').click();
        cy.get('.text-muted').contains('Your Basket').should('exist').and('be.visible');
        cy.get('#basketCount').invoke('text').should('eq', '3');
        cy.get('.input-group input').type('promo123');
        cy.get('.btn').contains('Redeem').click();
        cy.get('.invalid-feedback').contains('Please input a valid promo code.').should('be.visible');
        //testas turi nepraeiti nes Please input a valid promo code. žinutė nėra matoma. 
    });

    it('Verify empty cart button works', () => {
        cy.AddSomeProducts();
        //Verify that clicking “Basket” navigates to the basket page.
        cy.get('a[href="/basket"]').contains('Basket').click();
        cy.get('.text-muted').contains('Your Basket').should('exist').and('be.visible')
        cy.get('#basketCount').invoke('text').should('eq', '3');
        cy.get('.input-group a').contains('Empty Basket').click();
        cy.on('window:confirm', (text) => {
            expect(text).to.equal('Are you sure you want to empty your basket?');
            return true; // Paspaudžia "OK"
          });
          cy.get('#basketCount').invoke('text').should('eq', '0');
         
    })

    it.only('Verify if the About page is accessible', ()=>{
        cy.get('a[href="/basket"]').contains('Basket').click();
        cy.get(':nth-child(2) > .nav-link').click();
        cy.url().should('eq', 'https://sweetshop.netlify.app/about');
    })
    //testas ir turi nepraeiti, nes iš Basket puslapio negalima patekti į About puslapį


});

