import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '../app/page'

describe('Page', () => {
    it('displays correct heading', () => {
        render(<Page />)
        const heading = screen.getByTestId('navigation-h1')
        expect(heading).toHaveTextContent('Clash Stats')
    })
})
