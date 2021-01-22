// /// <reference types="Cypress"/>

// context('Accessing My Shortlists', () => {
    
//     describe('Visit Shortlist URL', () => {
        
//         it('Checking URL', () => {
//             cy.visit('https://www.10travlr.com.au/my/trip')
//             .location('pathname')
//             .should('eq','/login/a/49')

//             cy.get('#email')
//             .type('julian.travlr@gmail.com')
    
//             cy.get('#password')
//             .type('qwertyuiop1234567890', {log:false})
    
//             cy.get('#btn-submit')
//             .click()
            
//             cy.visit('https://www.10travlr.com.au/my/shortlist')
//             .location('pathname')
//             .should('eq', '/my/shortlist')
            
//         });

//         it('Checking Shortlists Title & Text', () => {
//             cy.get(':nth-child(4) > .block__horizontal__list > :nth-child(1) > .block__title__left > h2')
//             .should('contain','My Lists')
//             .and('exist')

//             cy.get(':nth-child(4) > .block__horizontal__list > :nth-child(1) > .block__title__left > .block__title__subtitle')
//             .should('contain','Create your first list and start saving your favourites!')
//             .and('exist')

//             cy.get(':nth-child(2) > .block-empty-state-my-account > .block__title > .block__title__left > .mb--20')
//             .should('contain','Lists I created')
//             .and('exist')

//             cy.get(':nth-child(2) > .block-empty-state-my-account > .empty__box > .empty__box__text')
//             .should('contain','Why not create a new one')
//             .and('exist')

//         });

//         it('Checking Create One Button', () => {
//             cy.get(':nth-child(2) > .block-empty-state-my-account > .empty__box > .link > .t-button-primary')
//             .should('contain','Create one')
//             .and('be.visible')

//         });

//     });
    
// });