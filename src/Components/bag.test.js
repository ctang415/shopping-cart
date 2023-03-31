import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/'
import { BrowserRouter } from 'react-router-dom';
import Bag from './Bag';
import { ItemOne, ItemTwo, ItemThree, ItemFour, ItemFive, ItemSix } from "./Images";
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

describe('Bag component', () => {

    it('renders check out page', async () => {
        let cart = []
        const {getByRole} = render(<Bag cart={cart}/>, {wrapper: BrowserRouter})
        expect(getByRole('heading', /Check Out/i)).toBeInTheDocument()
    })

    it('renders product when cart has item in it', async () => {
        let cart = [
            { item: [ 
            { url: ItemTwo, name: 'Amber', price: parseInt(19.99)}
            ], quantity: parseInt(1)}
        ]
        const {getByAltText} = render(<Bag cart={cart}/>, {wrapper: BrowserRouter})
        expect(getByAltText(/Candle/i)).toBeInTheDocument()
    })

    it('setCart is called after click', async () => {
        const setCart = jest.fn()
        let cart = [
            { item: [{ url: ItemTwo, name: 'Amber', price: 19.99}], quantity: parseInt(1)}
        ]
        const {getByRole} = render(<Bag setCart={setCart} cart={cart}/>, {wrapper: BrowserRouter})
        await act ( async () => { userEvent.click(getByRole('button', {name: 'X'} ))})
        expect(setCart).toBeCalled()
    })

    it('increase is called after click', async () => {
        const increaseCart = jest.fn(() => (cart[0].item.quantity) += 1)
        let cart = [
            { item: [{ url: ItemTwo, name: 'Amber', price: 19.99}], quantity: parseInt(1)}
        ]
        const {getByRole} = render(<Bag increaseCart={increaseCart} cart={cart}/>, {wrapper: BrowserRouter})
        const input = screen.getByLabelText(/inputBox/)
        await act ( async () => { userEvent.click(getByRole('button', {name: '+'} ))})
        expect(increaseCart.mock.calls).toHaveLength(1)
    })

})