/// <reference types="Cypress"/>

context('Header & Footer Details', () => {
    
    describe('Load 10Travlr Production', () => {
        
        it('Closing Intercome Tour Frame', () => {
            cy.visit('https://www.10travlr.com.au/')
            .location('pathname')
            .should('equal', '/')
            
            cy.wait(3000)
            
            cy.get('.intercom-tour-frame').then ( $element => {
                const $body = $element.contents().find('body')
                let stripe = cy.wrap($body)
                stripe.find('.intercom-1o29jst').click()
            
            });
        
        });

        it('Accepting Cookies', () => {
            cy.get('.t-btn-inverted').click()
        
        });

        it('Checking Intercom Chat', () => {
            cy.get('.intercom-launcher-frame').click()
            .should('be.visible').and('exist')
        
        });

    });

    describe('Checking All Header Details', () => {

        it('Checking Header Logo', () => {
            cy.get('.t-navbar-top-left-logo-image')
            .should('have.attr', 'src')

        });

        it('Checking Search Bar', () => {
            cy.get('#headerSearchSuggestion')
            .should('have.attr','data-gtm-event')
            .and('exist')
            
        });

        it('Checking Login Button', () => {
            cy.get('.t-navbar-top-right-menus-list-item-link')
            .should('have.attr', 'data-gtm-event')
            .and('eq', 'ev_header_signin')

            cy.get('.t-navbar-top-right-menus-list-item-link')
            .should('contain','Login')
            .and('exist')

        });

        it('Checking Header Menu', () => {
            cy.get('.t-navbar-top-left-burger > .t-icon')
            .should('exist')
            .and('be.visible')
            .click()

        });

        it('Checking Total Menu', () => {
            cy.get('.t-navbar-sidebar-body')
            .find('li')
            .should('have.length', '36')
            .and('be.visible')

        });

        it('Checking Click Header Menu', () => {

            cy.get(':nth-child(1) > .c-accordion-item > .t-accordion-item-list > .t-accordion-item-header > .t-accordion-icon')
            .should('be.visible').click() 
        
            cy.get(':nth-child(2) > .c-accordion-item > .t-accordion-item-list > .t-accordion-item-header > .t-accordion-icon')
            .should('be.visible').click() 
        
            cy.get(':nth-child(3) > .c-accordion-item > .t-accordion-item-list > .t-accordion-item-header > .t-accordion-icon')
            .should('be.visible').click() 
        
            cy.get(':nth-child(4) > .c-accordion-item > .t-accordion-item-list > .t-accordion-item-header > .t-accordion-icon')
            .scrollIntoView()
            .should('be.visible').click() 
        
            cy.get(':nth-child(5) > .c-accordion-item > .t-accordion-item-list > .t-accordion-item-header > .t-accordion-icon')
            .scrollIntoView()
            .should('be.visible').click() 
        
            cy.get(':nth-child(6) > .c-accordion-item > .t-accordion-item-list > .t-accordion-item-header > .t-accordion-icon')
            .scrollIntoView()
            .should('be.visible').click()

            cy.get('.t-navbar-sidebar-header-icon > .t-icon')
            .scrollIntoView()
            .click()

        });

    });

    describe('Checking All Footer Details', () => {
        
        it('Checking ID & Class of Footer', () => {
            cy.get('footer')
            .should('have.id', 'travlrFooter')
            .scrollIntoView()
                
        });
    
        it('Checking Explore by & Other Stuff', () => {
            cy.get('footer .footer-list')
            .find('li')
            .should('have.length', '34')
            cy.get('footer a.t-m-b-10')
            .should('have.attr','href')
               
        });
    
        it('Checking Subscribe Container', () => {
            cy.get('footer p.t-body-text')
            .should('contain', 'To get the latest deals, news & more')
            cy.get('#footerSubscribeEmail')
            .click()
            .type('QA.test@gmail.com')
            .clear()
    
        });
    
        it('Checking Social Media Logo & Button', () => {
            cy.get('footer ul.social-media')
            .find('li')
            .should('have.length','6')
            .and('be.visible')
            cy.get('#footerSubscribeSubmit')
            .should('contain','Subscribe')
            .and('have.value', 'Subscribe')
                
        });
    
        it('Checking Currency Option', () => {
            cy.get('select')
            .should('have.attr', 'data-gtm-event')
            .and('equal','ev_footer_multicurrency')
    
        });
    
        it('Checking Footer Logo', () => {
            cy.get('footer .t-navbar-bottom-main-left-logo-bb')
            .should('have.attr', 'src')
            .and('exist')
    
        });
    
        it('Checking Copyright Text', () => {
            cy.get('footer .t-color-white')
            .should('contain', '© Copyright 10 Travlr. All rights reserved.')
            .and('exist')
                
        });
    
    });

});