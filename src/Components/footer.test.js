import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/'
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';
import Footer from './Footer';

describe('Footer component', () => {
    it('renders footer links', async () => {
        const {getByText} = render(<MemoryRouter><Footer/></MemoryRouter>)
        expect(getByText(/twitter/i)).toBeInTheDocument()
        expect(getByText(/facebook/i)).toBeInTheDocument()
        expect(getByText(/instagram/i)).toBeInTheDocument()
    })
})