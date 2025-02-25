/// <reference types="cypress" />

context('Main', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('should get the correct html language', () => {
        cy.document().then((doc) => {
            expect(doc.documentElement.getAttribute('lang')).to.equal('en')
        })
    })

    it('should get the correct document properties', () => {
        cy.document().then((doc) => {
            const meta = doc.querySelector('meta[name="description"]')
            expect(meta.getAttribute('content')).to.equal('Clash of Clans API')
            const viewport = doc.querySelector('meta[name="viewport"]')
            expect(viewport.getAttribute('content')).to.equal(
                'width=device-width, initial-scale=1'
            )
        })
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
    })

    it('should get the correct title', () => {
        cy.title().should('eq', 'Clash Stats')
    })
})
