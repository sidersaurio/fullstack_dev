import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Header from '../Header'

describe('Header', () => {
    it('renders a heading', () => {
        render(<Header />)

        const heading = screen.getByRole('link', { name: /MyPortfolio/i })

        expect(heading).toBeInTheDocument()
    })

    it('renders navigation links', () => {
        render(<Header />)

        expect(screen.getByRole('link', { name: /Home/i })).toBeInTheDocument()
        expect(screen.getByRole('link', { name: /About/i })).toBeInTheDocument()
        expect(screen.getByRole('link', { name: /Blog/i })).toBeInTheDocument()
    })
})
