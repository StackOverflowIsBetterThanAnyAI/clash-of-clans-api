import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import Page from '../app/page'

describe('Page', () => {
    it('displays error for unsuccessful api call', () => {
        render(<Page />)
        const input = screen.getByTestId('search-input')
        expect(input).toHaveValue('')

        fireEvent.change(input, { target: { value: '#abcd1234' } })

        const button = screen.getByTestId('search-button')
        fireEvent.click(button)

        const error = screen.getByTestId('search-error')
        expect(error).toHaveTextContent(
            'Unable to fetch the player with ID #ABCD1234!'
        )
    })

    it('disables the button correctly', () => {
        render(<Page />)
        const input = screen.getByTestId('search-input')
        expect(input).toHaveValue('')

        fireEvent.change(input, { target: { value: '#' } })

        const button = screen.getByTestId('search-button')
        expect(button).toHaveAttribute('disabled')

        fireEvent.change(input, { target: { value: '#abcd123' } })
        expect(button).toHaveAttribute('disabled')

        fireEvent.change(input, { target: { value: 'abcd1234' } })
        expect(button).toHaveAttribute('disabled')

        fireEvent.change(input, { target: { value: '#abcd12345' } })
        expect(button).toHaveAttribute('disabled')
    })
})
