/// <reference types="cypress" />

context('Search', () => {
    const mockData200 = {
        name: '0 SKLZ,JUS LUCK',
        expLevel: '100',
        townHallLevel: '15',
        clan: {
            tag: '#CLAN123',
            name: 'The Best Clan',
            badgeUrls: {
                medium: '',
            },
        },
        trophies: '5000',
        builderBaseTrophies: '3000',
    }

    const mockData404 = {
        name: '',
        expLevel: '',
        townHallLevel: '',
        clan: {
            tag: '',
            name: '',
            badgeUrls: {
                medium: '',
            },
        },
        trophies: '',
        builderBaseTrophies: '',
    }

    beforeEach(() => {
        cy.visit('/')
        cy.clearLocalStorage()
    })

    afterEach(() => {
        cy.clearLocalStorage()
    })

    it('should display the correct user data', () => {
        cy.intercept('GET', '/api/player?id=RGC9YYGQ', {
            statusCode: 200,
            body: mockData200,
        })

        cy.get('[data-testid="search-input"]').type('#rgc9yygq')
        cy.get('[data-testid="search-button"]').click()

        cy.get('[data-testid="main-player"]').should(
            'have.text',
            '0 SKLZ,JUS LUCKPlayer Level 100 Townhall Level 15Trophies 5000 Builder Base Trophies 3000The Best Clan#CLAN123'
        )
    })

    it('should display error instead of user data', () => {
        cy.intercept('GET', '/api/player?id=12345678', {
            statusCode: 404,
            body: mockData404,
        })

        cy.get('[data-testid="search-input"]').type('#12345678')

        cy.get('[data-testid="search-button"]').click()
        cy.get('[data-testid="search-error"]').should(
            'have.text',
            'Unable to fetch the player with ID #12345678!'
        )
    })
})
