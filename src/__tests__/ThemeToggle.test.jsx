import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import Page from '../app/page'

describe('Page', () => {
    it('displays light mode per default', () => {
        render(<Page />)
        const theme = screen.getByTestId('theme-toggle')
        expect(theme).toHaveTextContent('Theme: ☀️Light')
    })

    it('changes theme on click', () => {
        render(<Page />)
        const theme = screen.getByTestId('theme-toggle')

        fireEvent.click(theme)
        expect(theme).toHaveTextContent('Theme: 🌙Dark')

        fireEvent.click(theme)
        expect(theme).toHaveTextContent('Theme: ☀️Light')
    })
})
