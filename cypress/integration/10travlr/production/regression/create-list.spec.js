/// <reference types="Cypress"/>

context('Accessing Create List', () => {
    
    describe('Create List', () => {
        
        it('Go to 10Travlr URL', () => {
            cy.visit('https://10travlr.com.au/')
            .location('pathname')
            .should('eq','/')

        });

        it('Login', () => {
            cy.get('.t-navbar-top-right-menus-list-item-link')
            .click()

            cy.get('#email')
            .type('julian.travlr@gmail.com')
    
            cy.get('#password')
            .type('qwertyuiop1234567890', {log:false})
    
            cy.get('#btn-submit')
            .click()

            cy.visit('https://10travlr.com.au/')
            .location('pathname')
            .should('eq','/')

            cy.wait(3000)
            
        });

        it('Go to Create List', () => {
            cy.get('.t-navbar-top-right-menus-list-item-link > .t-display-table-cell > .t-icon')
            .click()
            .should('be.visible')

            cy.get(':nth-child(6) > .t-navbar-top-right-menus-list-item-child-item-link')
            .click()

        });

        it('Fill Create List Form', () => {
            cy.get('#listName')
            .type('QA TESTING')
            .should('be.visible')

            cy.get('#description')
            .type('Just For Testing')
            .should('be.visible')

            cy.get('#create')
            .click()
            .should('be.visible')
        
        });

    });

});