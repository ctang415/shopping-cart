import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/'
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';

describe('Home component', () => {

    it('renders the background', () => {
        const {getByAltText} = render(<Home/>, {wrapper: BrowserRouter})
        expect(getByAltText(/Candles/i)).toHaveAttribute('src', 'pratikasha-mohanty.jpg')
    })

    it('renders the button', () => {
        const {getByRole} = render(<Home/>, {wrapper: BrowserRouter})
        const button = getByRole('button', {name: /shop now/i })
        expect(button).toBeInTheDocument();
    })
    
    it('button should be called after click', async () => {
        const onClickMock = jest.fn()
        render(<Home clickHandler={onClickMock} />, {wrapper: BrowserRouter})
        const button = screen.getByRole('button', {name: /shop now/i })
        fireEvent.click(button)
        expect(onClickMock).toBeCalled()
    })
    
})

