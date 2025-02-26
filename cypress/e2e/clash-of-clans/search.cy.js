/// <reference types="cypress" />

context('Search', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.clearLocalStorage()
    })

    afterEach(() => {
        cy.clearLocalStorage()
    })

    it('should exist api key', () => {
        const apiKey = Cypress.env('API_KEY')
        expect(apiKey).to.exist
        cy.log(apiKey) ===
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImUwZWFmOTI0LWExYmEtNDgzOS1hNjJkLWY5NzkxMzFlNWM0YiIsImlhdCI6MTczOTY1MzAzNiwic3ViIjoiZGV2ZWxvcGVyL2Y0MWI0NjQ3LTdmOTAtYjRlZC1jNmQ4LTUwNDlhMmQ5NzgyMSIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjk1LjkwLjE5OS4xOTkiXSwidHlwZSI6ImNsaWVudCJ9XX0.j-JFqGMdjxFA-5eXrw0mSvqsDUa_si3LvCEwbghCc7cVInO6oqBjghqseLkGg6zjb09pY-X3dw944xGHwkvz4Q'
    })

    it('should display user data', () => {
        cy.get('[data-testid="search-input"]').type('#rgc9yygq')

        cy.get('[data-testid="search-button"]').click()

        cy.request({
            method: 'GET',
            url: '/api/player?id=RGC9YYGQ',
            headers: {
                Authorization: `Bearer ${Cypress.env('API_KEY')}`,
            },
            failOnStatusCode: false,
        }).then((response) => {
            cy.log('API Response:', response)
            expect(response.status).to.eq(200)
        })

        cy.get('[data-testid="search-button"]').click()
        cy.get('[data-testid="main-player"]').should(
            'contain.text',
            '0 SKLZ,JUS LUCK'
        )
    })

    it('should display user data', () => {
        const apiKey = Cypress.env('API_KEY')
        cy.get('[data-testid="search-input"]').type('#rgc9yygq')

        cy.intercept('GET', '/api/player?id=RGC9YYGQ', (req) => {
            req.headers['Authorization'] = `Bearer ${apiKey}`
        })

        cy.get('[data-testid="search-button"]').click()
        cy.get('[data-testid="main-player"]').should(
            'contain.text',
            '0 SKLZ,JUS LUCK'
        )
    })

    it('should display error instead of user data', () => {
        const apiKey = Cypress.env('API_KEY')
        cy.get('[data-testid="search-input"]').type('#12345678')

        cy.intercept('GET', '/api/player?id=12345678', (req) => {
            req.headers['Authorization'] = `Bearer ${apiKey}`
        })

        cy.get('[data-testid="search-button"]').click()
        cy.get('[data-testid="search-error"]').should(
            'have.text',
            'Unable to fetch the player with ID #12345678!'
        )
    })
})
