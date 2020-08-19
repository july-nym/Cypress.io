/// <reference types="Cypress"/>


context('Accessing Activities', () => {
    
    describe('Visit Activities URL', () => {
        
        it('Checking Activities URL', () => {
            cy.visit('https://10travlr.freya.travlr.com/activities')
            .location('pathname')
            .should('eq', '/activities')
       
        });

        it('Accept Cookies', () => {
            cy.get('.t-btn-inverted')
            .click()

        });

        it('Checking Activities Search', () => {
            cy.get('#activitiesSearchDestination')
            .should('exist')

        });

        it('Checking Submit Button', () => {
            cy.get('button[type="submit"]')
            .should('be.visible')

        });
    
    });

});