/// <reference types = "cypress" />
 

describe('Login Page Test', () => {

    beforeEach(() => {
        cy.visit('https://sweetshop.netlify.app/');
    });

    // it('Verify that clicking “Login” navigates to the login page.', () => {
    //     // Verify that clicking “Login” navigates to the login page.
    //     cy.get('a[href="/login"]').contains('Login').click();
    //     cy.get('.my-4 h1').contains('Login').should('be.visible')
    //     // Verify that the login fields "Email address" and "Password" are visible.
    //     cy.contains('Email address').should('exist').and('be.visible');
    //     cy.contains('Password').should('exist').and('be.visible');
    //     cy.get('#dateTime').should('not.be.visible')
    //     //Enter valid credentials (Email address and Password) and click "Login".
    //     cy.get('#exampleInputEmail').type('saule@saule.lt');
    //     cy.get('#exampleInputPassword').type('saule');
    //     cy.get('.btn').contains('Login').click();
    //     //Verify that login is successful.
    //     cy.get('.my-4 h1').contains('Your Account').should('be.visible');
    //     //Verify that the shopping basket is visible.
    //     cy.get('.col-md-4 span').contains('Your Basket').should('be.visible')
    //     //Verify that the logged-in user's name is displayed.
    //     cy.get('.my-4 p').contains('Welcome back saule@saule.lt').should('be.visible');
    //     //testas ir turi nepraeiti, nes user name atvaizduoja netinkamai
    // });

    // it('Verify invalid credentials message.', () => {
    //     // Verify that clicking “Login” navigates to the login page.
    //     cy.get('a[href="/login"]').contains('Login').click();
    //     cy.get('.my-4 h1').contains('Login').should('be.visible')
    //     // Verify that the login fields "Email address" and "Password" are visible.
    //     cy.contains('Email address').should('exist').and('be.visible');
    //     cy.contains('Password').should('exist').and('be.visible');
    //     cy.get('#dateTime').should('not.be.visible')
    //     //Enter invalid credentials (Email address and Password) and click "Login".
    //     cy.get('#exampleInputEmail').type('@@@');
    //     cy.get('.btn').contains('Login').click();
    //     //Verify that an incorrect email notification is displayed.
    //     cy.get('.invalid-feedback').contains('Please enter a valid email address.').should('be.visible');
    //     //Verify that an incorrect password notification is displayed.
    //     cy.get('.invalid-feedback').contains('Please enter a valid password.').should('be.visible')

    // });


//visi 3 Twitter, Facebook ir LinkeId testai turi nepraeiti.

    it('Twitter link is working', ()=> {
        cy.get('a[href="/login"]').contains('Login').click();
        cy.get('.social > :nth-child(1)').should('have.attr', 'href', 'www.twitter.com')
        cy.get('a img[alt="twitter"]').click();
    })

    it('Facebook link is working', ()=> {
        cy.get('a[href="/login"]').contains('Login').click();
        cy.get('.social > :nth-child(2)').should('have.attr', 'href', 'www.facebook.com')
        cy.get('a img[alt="facebook"]').click();
    })

    it('LinkedIn link is working', ()=> {
        cy.get('a[href="/login"]').contains('Login').click();
        cy.get('.social > :nth-child(3)').should('have.attr', 'href', 'www.linkedin.com')
        cy.get('a img[alt="linkedin"]').click();
        
    })

    

});

//Klaidos
//password užtenka vieno bet kokio simbolio, raidės, skaičiaus ar netgi tarpelio
//email reikia, kad būtų bet koks simbolis prieš @ ir bet koks simbolis po @ ir pavyks užsiregistruoti
//Twitter, Facebbok ir LinkedIn nuorodos turi tuščią a atributą. Nuoros niekur neveda

