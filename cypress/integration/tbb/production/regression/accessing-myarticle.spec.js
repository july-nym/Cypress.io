/// <reference types="Cypress"/>

context('Accessing My Articles', () => {
    
    describe('Visit My Articles URL', () => {
        
        it('Checking URL', () => {
            cy.visit('https://www.thebalibible.com/my/article')
            
        });

        it('Login', () => {
            cy.get('#email')
            .type('julian.travlr@gmail.com')
    
            cy.get('#password')
            .type('qwertyuiop1234567890', {log:false})
        
            cy.get('#btn-submit')
            .click()

        });


        it('Visit My Article URL', () => {
            cy.get('.mobile__header > .container-Common > .common__shortcut > .common__shortcut__profile > .dropdown > #shortcut__profile > .my__account__icon > .material-icons')
            .click()
            cy.get('.mobile__header > .container-Common > .common__shortcut > .common__shortcut__profile > .dropdown > .dropdown-menu > [href="https://www.thebalibible.com/my/article"]')
            .click()
        });
        
        it('Checking My Articles Title & Text', () => {
            cy.get(':nth-child(1) > :nth-child(1) > .block__title__left > h2')
            .should('contain.text','My Articles')
            .and('exist')

            cy.get('.block__title__subtitle')
            .should('contain','Create your first article and inspire other users')
            .and('exist')
        
        });

        it('Checking Create One Button', () => {
            cy.get(':nth-child(1) > .block-empty-state-my-account > .empty__box > .link > .t-button-primary')
            .should('be.visible')
            .and('contain.text','Create one')

        });

    });

});