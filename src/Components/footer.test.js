import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/'
import { BrowserRouter } from 'react-router-dom';
import Footer from './Footer';

describe('Footer component', () => {
    it('renders footer links', async () => {
        const {getByText} = render(<Footer/>, {wrapper: BrowserRouter})
        expect(getByText(/twitter/i)).toBeInTheDocument()
        expect(getByText(/facebook/i)).toBeInTheDocument()
        expect(getByText(/instagram/i)).toBeInTheDocument()
    })
})