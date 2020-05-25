/// <reference types="Cypress"/>

context('Logout', () => {
    
    describe('Visit 10Travlr', () => {
        
        it('Checking URL', () => {
            cy.visit('https://www.10travlr.com.au/')
            .location('pathname')
            .should('eq','/')

        });

        it('Close Intercom', () => {
            cy.get('.intercom-tour-frame').then ( $element => {
                const $body = $element.contents().find('body')
                let stripe = cy.wrap($body)
                stripe.find('.intercom-1o29jst')
                .click()

            })
            
        });

        it('Go to Login Form', () => {
            cy.get('.t-navbar-top-right-menus-list-item-link')
            .click()
            cy.wait(3000)

        });

        it('Login', () => {
            cy.get('#email')
            .type('julian.travlr@gmail.com')
    
            cy.get('#password')
            .type('qwertyuiop1234567890', {log:false})
    
            cy.get('#btn-submit')
            .click()

        });

        it('Logout', () => {
            cy.get('.mobile__header > .container-Common > .common__shortcut > .common__shortcut__profile > .dropdown > #shortcut__profile > .my__account__text')
            .click()

            cy.get('.mobile__header > .container-Common > .common__shortcut > .common__shortcut__profile > .dropdown > .dropdown-menu > [href="https://www.10travlr.com.au/signout"]')
            .click()

        });

    });

});