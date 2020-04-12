/// <reference types="cypress" />

describe('Smoke Test 10Travlr', () => {
    it('Accessing Homepage', () => {
        cy.Homepage()
    
    })
        
    it('Header & Footer Details', () => {
        cy.Header()
        cy.Footer()
    
    })

    it('Accessing Shortlists', () => {
        cy.Shortlist()
    
    })

    it('Accessing Discover', () => {
        cy.Discover()
    
    })

    it('Accessing Trips', () => {
        cy.Trips()
    
    })

    it('Accessing Articles', () => {
        cy.Articles()

    })

    it('Accessing Activities', () =>{
        cy.Activities()

    })

    it('Accessing Deals & Offers', () => {
        cy.DealsAndOffers()
    })

    it('Accessing Health & Beauty', () => {
        cy.HealthAndBeauty()

    })
})