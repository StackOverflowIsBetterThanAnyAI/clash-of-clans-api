/// <reference types="cypress" />

context('Search', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.clearLocalStorage()
    })

    afterEach(() => {
        cy.clearLocalStorage()
    })

    it('should display user data', () => {
        cy.get('[data-testid="search-input"]').type('#rgc9yygq')
        cy.get('[data-testid="search-button"]').click()
        cy.get('[data-testid="main-player"]').should(
            'contain.text',
            '0 SKLZ,JUS LUCK'
        )
    })

    it('should display error instead of user data', () => {
        cy.get('[data-testid="search-input"]').type('#12345678')
        cy.get('[data-testid="search-button"]').click()
        cy.get('[data-testid="search-error"]').should(
            'have.text',
            'Unable to fetch the player with ID #12345678!'
        )
    })
})
