/// <reference types="cypress" />

describe('Smoke Test 10Travlr', () => {
    
    it('Accessing Homepage', () => {

        cy.visit('https://www.10travlr.com.au/')
            
        cy.wait(5000)

        cy.get('.intercom-tour-frame').then ( $element => {

            const $body = $element.contents().find('body')

            let stripe = cy.wrap($body)

            stripe.find('.intercom-1o29jst')
            .click()
            
        cy.get('.privy-dismiss-content')
        .click()

        cy.wait(5000)

        cy.get('.t-btn-inverted')
        .click()

        cy.get('.t-navbar-top-left-logo-image')
        .should('have.attr', 'src')

        cy.get('.t-navbar-top-right-menus-list-item-link')
        .should('be.visible').and('contain', 'Login')

        cy.get('.t-hero-main-content-list-title-wrapper > .t-btn')
        .should('be.visible').and('contain', 'Take a look')

        cy.get('#headerSearchSuggestion')
        .should('be.visible').and('have.attr', 'type')
        cy.get(':nth-child(1) > .t-w-100 > .link-wrapper > .link-item')
        .should('contain', 'Mix & Match Flights')

        cy.get(':nth-child(2) > .t-w-100 > .link-wrapper > .link-item')
        .should('contain', 'Accommodation')

        cy.get(':nth-child(3) > .t-w-100 > .link-wrapper > .link-item')
        .should('contain', 'Activities')

        cy.get(':nth-child(4) > .t-w-100 > .link-wrapper > .link-item')
        .should('contain', 'Deals & Offers')

        cy.wait(5000)

    })
})


it('Header & Footer Details', () => {

        cy.get('.t-navbar-top-left-burger > .t-icon')
        .click()
        cy.wait(2000)

        cy.get(':nth-child(1) > .c-accordion-item > .t-accordion-item-list > .t-accordion-item-header > .t-accordion-icon')
        .click()
        .should('be.visible')

        cy.wait(2000)

        cy.get(':nth-child(2) > .c-accordion-item > .t-accordion-item-list > .t-accordion-item-header > .t-accordion-icon')
        .click()
        .should('be.visible')

        cy.wait(2000)

        cy.get(':nth-child(3) > .c-accordion-item > .t-accordion-item-list > .t-accordion-item-header > .t-accordion-icon')
        .click()
        .should('be.visible')
        
        cy.wait(2000)

        cy.get(':nth-child(4) > .c-accordion-item > .t-accordion-item-list > .t-accordion-item-header > .t-accordion-icon')
        .click()
        .should('be.visible')

        cy.wait (2000)

        cy.get(':nth-child(5) > .c-accordion-item > .t-accordion-item-list > .t-accordion-item-header > .t-accordion-icon')
        .click()
        .should('be.visible')

        cy.wait(2000)

        cy.get(':nth-child(6) > .c-accordion-item > .t-accordion-item-list > .t-accordion-item-header > .t-accordion-icon')
        .click()
        .should('be.visible')

        cy.wait(2000)

        cy.get('.t-navbar-sidebar-header-icon > .t-icon')
        .scrollIntoView()

        cy.get('.t-navbar-sidebar-header-icon > .t-icon')
        .click()

        cy.get('footer')
        .scrollIntoView()

        cy.wait(3000)

        cy.visit('https://www.10travlr.com.au/')
        .location('pathname')
        .should('eq', '/')

        cy.wait(5000)

        cy.get('.intercom-tour-frame').then ( $element => {

            const $body = $element.contents().find('body')
    
            let stripe = cy.wrap($body)
    
            stripe.find('.intercom-1o29jst')
            .click()

        cy.get('.privy-dismiss-content')
        .click()
        
    })
})


    it('Accessing Shortlists', () => {

        cy.get('.t-cards-wrapper > :nth-child(1) > .t-card-title > .t-card-title-content > .title')
        .scrollIntoView()

        cy.wait(3000)

        cy.visit('https://www.10travlr.com.au/shortlists')
            .location('pathname')
            .should('eq', '/shortlists')

        cy.get('.privy-dismiss-content')
        .click()

        cy.wait(3000)

        cy.visit('https://www.10travlr.com.au/')
            .location('pathname')
            .should('eq', '/')

        cy.wait(5000)

        cy.get('.intercom-tour-frame').then ( $element => {

            const $body = $element.contents().find('body')
    
            let stripe = cy.wrap($body)
    
            stripe.find('.intercom-1o29jst')
            .click()

        cy.wait(5000)

        cy.get('.t-btn-inverted')
        .click()
        
    })
})

    it('Accessing Discover', () => {
        
        cy.get('.t-navbar-top-left-burger > .t-icon')
        .click()
        
        cy.wait(3000)

        cy.visit('https://www.10travlr.com.au/pages/key-of-our-benefits-13/')
            .location('pathname')
            .should('eq', '/pages/key-of-our-benefits-13/')

        cy.wait(3000)

        cy.visit('https://www.10travlr.com.au/')
            .location('pathname')
            .should('eq', '/')

        cy.wait(5000)

        cy.get('.intercom-tour-frame').then ( $element => {

            const $body = $element.contents().find('body')
    
            let stripe = cy.wrap($body)
    
            stripe.find('.intercom-1o29jst')
            .click()

        cy.get('.privy-dismiss-content')
        .click()
        
        cy.wait(5000)

        cy.get('.t-btn-inverted')
        .click()

    })
})


    it('Accessing Trips', () => {

        cy.get('.t-cards-wrapper > :nth-child(2) > .t-card-title > .t-card-title-content > .title')
        .scrollIntoView()

        cy.wait(3000)

        cy.visit('https://www.10travlr.com.au/trips')
        .location('pathname')
        .should('eq', '/trips')

        cy.wait(3000)

        cy.visit('https://www.10travlr.com.au/')
            .location('pathname')
            .should('eq', '/')

        cy.wait(5000)

        cy.get('.intercom-tour-frame').then ( $element => {

            const $body = $element.contents().find('body')
    
            let stripe = cy.wrap($body)
    
            stripe.find('.intercom-1o29jst')
            .click()

        cy.get('.privy-dismiss-content')
        .click()

        cy.wait(5000)
        
        cy.get('.t-btn-inverted')
        .click()

    })
})

    it('Accessing Articles', () => {

        cy.get('.c-home-articles > .t-container > .c-card > .c-section-title-button > .section-title-button__header > .section-title-button__wrapper-action > .t-btn-default')
        .scrollIntoView()

        cy.wait(3000)

        cy.visit('https://www.10travlr.com.au/articles')
        .location('pathname')
        .should('eq', '/articles')

        cy.wait(3000)

        cy.visit('https://www.10travlr.com.au/')
            .location('pathname')
            .should('eq', '/')

        cy.wait(5000)

        cy.get('.intercom-tour-frame').then ( $element => {

            const $body = $element.contents().find('body')
    
            let stripe = cy.wrap($body)
    
            stripe.find('.intercom-1o29jst')
            .click()

        cy.get('.privy-dismiss-content')
        .click()

        cy.wait(5000)
        
        cy.get('.t-btn-inverted')
        .click()

    })
})


    it('Accessing Activities', () =>{

        cy.get('.t-navbar-top-left-burger > .t-icon')
        .click()

        cy.wait(3000)

        cy.visit('https://www.10travlr.com.au/activities')
            .location('pathname')
            .should('eq', '/activities')

        cy.wait(3000)

        cy.get('.t-btn-inverted')
        .click()

        cy.visit('https://www.10travlr.com.au/')
        .location('pathname')
        .should('eq', '/')

        cy.wait(5000)

        cy.get('.intercom-tour-frame').then ( $element => {

            const $body = $element.contents().find('body')

            let stripe = cy.wrap($body)

            stripe.find('.intercom-1o29jst')
            .click()

        cy.get('.privy-dismiss-content')
        .click()

    })
})


    it('Accessing Deals & Offers', () => {

        cy.get('.t-navbar-top-left-burger > .t-icon')
        .click()

        cy.wait(3000)

        cy.visit('https://www.10travlr.com.au/deals-and-offers')
            .location('pathname')
            .should('eq', '/deals-and-offers')

        cy.wait(3000)

        cy.visit('https://www.10travlr.com.au/')
            .location('pathname')
            .should('eq', '/')

        cy.wait(5000)

        cy.get('.intercom-tour-frame').then ( $element => {

            const $body = $element.contents().find('body')

            let stripe = cy.wrap($body)

            stripe.find('.intercom-1o29jst')
            .click()

        cy.get('.privy-dismiss-content')
        .click()

        cy.wait(5000)

        cy.get('.t-btn-inverted')
        .click()

    })
})


    it('Accessing Health & Beauty', () => {

        cy.get('.t-navbar-top-left-burger > .t-icon')
        .click()

        cy.wait(2000)

        cy.get(':nth-child(5) > .c-accordion-item > .t-accordion-item-list > .t-accordion-item-header > .t-accordion-icon')
        .click()

        cy.wait(2000)

        cy.visit('https://www.10travlr.com.au/deals-and-offers/search?category=Health%20%26%20Beauty')
        .location('pathname')
        .should('eq', '/deals-and-offers/search')

        cy.visit('https://www.10travlr.com.au/')
        .location('pathname')
        .should('eq', '/')

        cy.wait(5000)

        cy.get('.intercom-tour-frame').then ( $element => {

            const $body = $element.contents().find('body')

            let stripe = cy.wrap($body)

            stripe.find('.intercom-1o29jst')
            .click()

        cy.get('.privy-dismiss-content')
        .click()

        cy.wait(5000)

        cy.get('.t-btn-inverted')
        .click()

    })
})


    it('Accessing Events', () => {

        cy.visit('https://www.10travlr.com.au/events')
            .location('pathname')
            .should('eq', '/events')

        cy.wait(3000)


        cy.visit('https://www.10travlr.com.au/')
            .location('pathname')
            .should('eq', '/')

        cy.wait(5000)

        cy.get('.intercom-tour-frame').then ( $element => {

            const $body = $element.contents().find('body')

            let stripe = cy.wrap($body)

            stripe.find('.intercom-1o29jst')
            .click()

        cy.get('.privy-dismiss-content')
        .click()
    
    })
})


    it('Accessing Venue', () => {

        cy.visit('https://www.10travlr.com.au/venue')

            cy.get('#email').type('julian.travlr@gmail.com')

            cy.get('#password').type('qwertyuiop1234567890', {log:false})
    
            cy.get('#btn-submit').click()

            Cypress.on('uncaught:exception', (err, runnable) => {
                throw err
              })
            
    cy.visit('https://www.10travlr.com.au/venue')
    .location('pathname')
    .should('eq', '/venue')
})

    it('Login', () => {

        cy.get('.mobile__logo--isite')
        .click()

        cy.visit('https://www.10travlr.com.au/')
        .location('pathname')
        .should('eq', '/')

        cy.wait(5000)

        cy.get('.intercom-tour-frame').then ( $element => {

            const $body = $element.contents().find('body')
            
            let stripe = cy.wrap($body)
            
            stripe.find('.intercom-1o29jst')
            .click()
            
        cy.get('.privy-dismiss-content')
            .click()

        cy.get('.t-navbar-top-right-menus-list-item-link')
        .click()

        cy.wait(3000)
        
        cy.get('#email')
        .type('julian.travlr@gmail.com')

        cy.get('#password')
        .type('qwertyuiop1234567890', {log:false})

        cy.get('#btn-submit')
        .click()

        cy.wait(3000)

        cy.visit('https://www.10travlr.com.au/')
        .location('pathname')
        .should('eq', '/')

        cy.wait(5000)

        })
})

    
it('Accessing My Bookings & Deals', () => { 

    cy.get('.t-navbar-top-right-menus-list-item-link')
    .click()

        cy.get(':nth-child(1) > .t-navbar-top-right-menus-list-item-child-item-link')
        .click()

        cy.wait(3000)

        cy.get('#email')
        .type('julian.travlr@gmail.com')
            
        cy.get('#password')
        .type('qwertyuiop1234567890',{log:false})
            
        cy.get('#btn-submit')
        .click()

        cy.visit('https://www.10travlr.com.au/booking-management')
        .location('pathname')
        .should('eq', '/booking-management')

        cy.wait(3000)

        cy.visit('https://www.10travlr.com.au/')
        .location('pathname')
        .should('eq', '/')
        
        cy.wait(5000)

        cy.get('.privy-dismiss-content')
        .click()

})

it('Accessing My Shortlists', () => {

    cy.visit('https://www.10travlr.com.au/my/shortlist')

    cy.get('#email')
    .type('julian.travlr@gmail.com')
            
    cy.get('#password')
    .type('qwertyuiop1234567890',{log:false})
            
    cy.get('#btn-submit')
    .click()

    cy.visit('https://www.10travlr.com.au/my/shortlist')
    .location('pathname')
    .should('eq', '/my/shortlist')

    cy.wait(3000)

    cy.visit('https://www.10travlr.com.au/')
    .location('pathname')
    .should('eq', '/')
    
})


it('Accessing My Trips', () => {

    cy.visit('https://www.10travlr.com.au/my/trip')

    cy.get('#email')
    .type('julian.travlr@gmail.com')
            
    cy.get('#password')
    .type('qwertyuiop1234567890',{log:false})
        
    cy.get('#btn-submit')
    .click()

    cy.visit('https://www.10travlr.com.au/my/trip')
    .location('pathname')
    .should('eq', '/my/trip')

    cy.wait(3000)

    cy.visit('https://www.10travlr.com.au/')
    .location('pathname')
    .should('eq', '/')

    cy.wait(5000)
    
    cy.get('.privy-dismiss-content')
    .click()

})


it('Accessing My Articles', () => {

    cy.visit('https://www.10travlr.com.au/my/article')

    cy.get('#email')
    .type('julian.travlr@gmail.com')
            
    cy.get('#password')
    .type('qwertyuiop1234567890',{log:false})
        
    cy.get('#btn-submit')
    .click()

    cy.visit('https://www.10travlr.com.au/my/article')
    .location('pathname')
    .should('eq', '/my/article')

    cy.wait(3000)

    cy.visit('https://www.10travlr.com.au')
    .location('pathname')
    .should('eq', '/')

    cy.wait(5000)

    cy.get('.privy-dismiss-content')
    .click()

})


it('Accessing My Notification', () => {

    cy.visit('https://www.10travlr.com.au/my/notification')

    cy.get('#email')
    .type('julian.travlr@gmail.com')
            
    cy.get('#password')
    .type('qwertyuiop1234567890',{log:false})
        
    cy.get('#btn-submit')
    .click()

    cy.visit('https://www.10travlr.com.au/my/notification')
    .location('pathname')
    .should('eq', '/my/notification')

    cy.wait(3000)

    cy.visit('https://www.10travlr.com.au')
    .location('pathname')
    .should('eq', '/')

    cy.wait(5000)

    cy.get('.privy-dismiss-content')
    .click()

})


it('Create A List', () => {

    cy.get('.t-navbar-top-right-menus-list-item-link-myaccount')
    .click()

    cy.get(':nth-child(6) > .t-navbar-top-right-menus-list-item-child-item-link')
    .click()

    cy.get('#listName')
    .type('QA TEST 1')

    cy.get('#description')
    .type('Smoke Testing')

    cy.wait(2000)

    cy.get('#cancel')
    .click()

})


it('Accessing Business Portal', () => {

    cy.get('.t-navbar-top-right-menus-list-item-link-myaccount')
    .click()

    cy.wait(3000)

    cy.get(':nth-child(7) > .t-navbar-top-right-menus-list-item-child-item-link')
    .click()

    cy.get('.mobile__header > .container-Common > .common__shortcut > .common__login > .common__login__link')
    .click()

    cy.get('#email')
    .type('julian.travlr@gmail.com')
            
    cy.get('#password')
    .type('qwertyuiop1234567890',{log:false})
        
    cy.get('#btn-submit')
    .click()

    Cypress.on('uncaught:exception', (err, runnable) => {
        throw err })

    cy.visit('https://www.10travlr.com.au/business_premium/test-test-test-1282692/overview')
    .location('pathname')
    .should('eq', '/business_premium/test-test-test-1282692/overview')

})

it('Logout', () => {

    cy.get('.mobile__header > .container-Common > .common__shortcut > .common__shortcut__profile > .dropdown > #shortcut__profile > .my__account__text')
    .click()

    cy.wait(3000)

    cy.get('.mobile__header > .container-Common > .common__shortcut > .common__shortcut__profile > .dropdown > .dropdown-menu > [href="https://www.10travlr.com.au/signout"]')
    .click()

    cy.visit('https://www.10travlr.com.au')
    .location('pathname')
    .should('eq', '/')

    cy.wait(5000)

    cy.get('.privy-dismiss-content')
    .click()

})

it('Accessing Contact Us', () => { 
            
    cy.get('footer')
    .scrollIntoView()

    cy.wait(3000)

    cy.visit('https://www.10travlr.com.au/contact-us')
    .location('pathname')
    .should('eq', '/contact-us')

    cy.wait(3000)

    cy.visit('https://www.10travlr.com.au/')
    .location('pathname')
    .should('eq', '/')

    cy.wait(5000)

    cy.get('.intercom-tour-frame').then ( $element => {

        const $body = $element.contents().find('body')

        let stripe =    cy.wrap($body)

        stripe.find('.intercom-1o29jst')
        .click()

    cy.get('.privy-dismiss-content')
    .click()

    cy.wait(3000)

    cy.get('.t-btn-inverted')
    .click()

    })
})


it('Accessing Terms', () => { 
            
    cy.get('footer')
    .scrollIntoView()

    cy.wait(3000)

    cy.visit('https://www.10travlr.com.au/pages/terms-3')
    .location('pathname')
    .should('eq', '/pages/terms-3')

    cy.wait(3000)

    cy.visit('https://www.10travlr.com.au/')
    .location('pathname')
    .should('eq', '/')

    cy.wait(5000)

    cy.get('.intercom-tour-frame').then ( $element => {

        const $body = $element.contents().find('body')
    
        let stripe = cy.wrap($body)
    
        stripe.find('.intercom-1o29jst')
        .click()

    cy.get('.privy-dismiss-content')
    .click()
            
    cy.wait(3000)
    
    cy.get('.t-btn-inverted')
    .click()
            
    })
})


it('Accessing DMCA', () => { 
            
    cy.get('footer')
    .scrollIntoView()

    cy.wait(3000)

    cy.visit('https://www.10travlr.com.au/pages/dmca-4')
    .location('pathname')
    .should('eq', '/pages/dmca-4')

    cy.wait(3000)

    cy.visit('https://www.10travlr.com.au/')
    .location('pathname')
    .should('eq', '/')

    cy.wait(5000)

    cy.get('.intercom-tour-frame').then ( $element => {

        const $body = $element.contents().find('body')

        let stripe = cy.wrap($body)

        stripe.find('.intercom-1o29jst')
        .click()

    cy.get('.privy-dismiss-content')
    .click()
    
    cy.wait(3000)

    cy.get('.t-btn-inverted')
    .click()

    })
})


it('Accessing Refund Policy', () => { 
            
    cy.get('footer')
    .scrollIntoView()

    cy.wait(3000)

    cy.visit('https://www.10travlr.com.au/pages/refund-policy-5')
    .location('pathname')
    .should('eq', '/pages/refund-policy-5')

    cy.wait(3000)

    cy.visit('https://www.10travlr.com.au/')
    .location('pathname')
    .should('eq', '/')

    cy.wait(5000)

    cy.get('.intercom-tour-frame').then ( $element => {

        const $body = $element.contents().find('body')

        let stripe = cy.wrap($body)

        stripe.find('.intercom-1o29jst')
        .click()

    cy.get('.privy-dismiss-content')
    .click()
        
    cy.wait(3000)

    cy.get('.t-btn-inverted')
    .click()

    })
})


it('Accessing Privacy Policy', () => { 
            
    cy.get('footer')
    .scrollIntoView()

    cy.wait(3000)

    cy.visit('https://www.10travlr.com.au/pages/privacy-policy-1')
    .location('pathname')
    .should('eq', '/pages/privacy-policy-1')

    cy.wait(3000)

    cy.visit('https://www.10travlr.com.au/')
    .location('pathname')
    .should('eq', '/')

    cy.wait(5000)

    cy.get('.intercom-tour-frame').then ( $element => {

        const $body = $element.contents().find('body')

        let stripe = cy.wrap($body)

        stripe.find('.intercom-1o29jst').click()

    cy.get('.privy-dismiss-content').click()
        
    cy.wait(3000)

    cy.get('.t-btn-inverted').click()

        })
    })
})
