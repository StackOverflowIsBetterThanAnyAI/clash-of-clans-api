/// <reference types="cypress" />

context('404', () => {
    beforeEach(() => {
        cy.visit('/admin', { failOnStatusCode: false })
    })

    it('should correctly display a 404 error', () => {
        cy.get('.next-error-h1').should('have.text', '404')
        cy.get('h2').should('have.text', 'This page could not be found.')
    })
})
