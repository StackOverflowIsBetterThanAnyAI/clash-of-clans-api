/// <reference types="cypress" />

context('Navigation', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('should get the correct navigation bar', () => {
        expect("[data-testid='navigation']").to.exist
        cy.get("[data-testid='navigation-img']").should(
            'have.attr',
            'alt',
            'Reload Page.'
        )
        cy.get("[data-testid='navigation-h1']").should(
            'have.text',
            'Clash Stats'
        )
        cy.get("[data-testid='theme-toggle']").should('have.text', '☀️ Light')
    })
})
