import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/'
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

describe('Home component', () => {

    it('renders the background', () => {
        const {getByAltText} = render(<MemoryRouter><Home/></MemoryRouter>)
        expect(getByAltText(/Candles/i)).toHaveAttribute('src', 'pratikasha-mohanty.jpg')
    })

    it('renders the button', () => {
        const {getByRole} = render(<MemoryRouter><Home/></MemoryRouter>)
        const button = getByRole('button', {name: /shop now/i })
        expect(button).toBeInTheDocument()
    })
    
    it('button should be called after click', async () => {
        const onClickMock = jest.fn()
        render(<MemoryRouter><Home clickHandler={onClickMock} /></MemoryRouter>)
        const button = screen.getByRole('button', {name: /shop now/i })
        fireEvent.click(button)
        expect(onClickMock).toBeCalled()
    })
    
})

