/// <reference types="Cypress"/>

context('Accessing Shortlist', () => {
    
    describe('Visit 10Travlr Shortlist', () => {

        it('Checking Shortlists URL', () => {
            cy.visit('https://www.10travlr.com.au/shortlists').location('pathname')
            .should('eq', '/shortlists')
            cy.get('.t-btn-inverted')
            .click()

        });

        it('Checking Favourite List Text', () => {
            cy.get('.section-title-button__header > .t-display-table-cell > .t-heading-2')
            .should('contain', 'All Favourite Lists')
            .and('be.visible')
            
        });

        it('Checking Text Under Favourite List', () => {
            cy.get('.sub-header')
            .should('contain', 'The ultimate travel inspiration by travellers just like you')

        });

        it('Checking All Destination Column', () => {
            cy.get('input.dropdown-input.t-input-text.t-input-text-tinted-right.t-input-text-medium')
            .should('have.attr', 'placeholder')
            .and('contain', 'All destinations')

        });

        it('Checking All Type Of Lists Column', () => {
            cy.get('input.dropdown-input.t-input-text.t-input-text-tinted-right.t-input-text-medium')
            .should('have.attr', 'placeholder')

        });

        it('Checking Search Column', () => {
            cy.get('input.t-input-text.t-input-text-tinted-left.t-input-text-tinted-medium')
            .should('have.attr','placeholder')
            .and('contain', 'Search')

        });

        it('Checking Title Popular Shortlist', () => {
            cy.get(':nth-child(1) > .group-header-container > :nth-child(1) > .t-heading-2')
            .should('contain', 'Popular Shortlist')
            .and('be.visible')

        });

        it('Checking Title Accommodation', () => {
            cy.get(':nth-child(2) > .group-header-container > :nth-child(1) > .t-heading-2')
            .should('contain','Accommodation')

        });

        it('Checking Title Eat and Drink', () => {
            cy.get(':nth-child(3) > .group-header-container > :nth-child(1) > .t-heading-2')
            .should('contain','Eat and Drink')
            .scrollIntoView()

        });

        it('Checking Title Activities', () => {
            cy.get(':nth-child(4) > .group-header-container > :nth-child(1) > .t-heading-2')
            .should('contain', 'Activities')
            .scrollIntoView()
            
        });

        it('Checking Title Cultural', () => {
            cy.get(':nth-child(5) > .group-header-container > :nth-child(1) > .t-heading-2')
            .should('contain','Cultural')
            .scrollIntoView()

        });

        it('Checking Title Family Friendly', () => {
            cy.get(':nth-child(6) > .group-header-container > :nth-child(1) > .t-heading-2')
            .should('contain','Family friendly')
            .scrollIntoView()

        });

        // it('Checking Title Nightlife', () => {
        //     cy.get(':nth-child(7) > .group-header-container > :nth-child(1) > .t-heading-2')
        //     .should('contain','Nightlife')
        //     .scrollIntoView()

        // });

        // it('Checking Title Weddings', () => {
        //     cy.get(':nth-child(8) > .group-header-container > :nth-child(1) > .t-heading-2')
        //     .should('contain','Weddings')
        //     .scrollIntoView()

        // });

        // it('Checking Title Honeymoons', () => {
        //     cy.get(':nth-child(9) > .group-header-container > :nth-child(1) > .t-heading-2')
        //     .should('contain','Honeymoons')
        //     .scrollIntoView()

        // });
    
    });
    
});