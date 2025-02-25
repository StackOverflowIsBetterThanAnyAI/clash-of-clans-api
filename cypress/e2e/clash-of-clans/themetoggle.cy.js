/// <reference types="cypress" />

context('Theme Toggle', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('should toggle theme on click', () => {
        cy.get("[data-testid='theme-toggle']").click()
        cy.get("[data-testid='theme-toggle']").should('have.text', '🌙 Dark')
    })

    it('should use same theme on page reload', () => {
        cy.get("[data-testid='theme-toggle']").click()
        cy.reload()
        cy.get("[data-testid='theme-toggle']").should('have.text', '🌙 Dark')
    })
})
