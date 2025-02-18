import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '../app/page'

describe('Page', () => {
    it('displays searchbar correctly', () => {
        render(<Page />)
        const input = screen.getByTestId('search-input')
        expect(input).toHaveTextContent('')
    })
})
