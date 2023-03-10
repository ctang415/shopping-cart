import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/'
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import Nav from './Nav';

describe('Nav component', () => {

  let cart = []
  it('renders header logo', () => {
    const { getByRole } = render(<Nav cart={cart}/>, {wrapper: BrowserRouter})
    expect(getByRole('heading', /The Burnt Wick/i)).toBeInTheDocument()
  })
    
  it('nav links are displayed', () => {
      let cart = []
      const { getByText } = render(<Nav cart={cart}/>, {wrapper: BrowserRouter})
      expect(getByText(/home/i)).toBeInTheDocument()
      expect(getByText(/store/i)).toBeInTheDocument()
  })

  it('nav cart is empty', () => {
      const { getByText } = render(<Nav cart={cart}/>, {wrapper: BrowserRouter})
      expect(getByText(/0/i)).toBeInTheDocument()
  })

  it('navigates to store page on click', async () => {
      render(
          <Nav cart={cart}/>, {wrapper: BrowserRouter}
      )
      await act ( async () => { userEvent.click(screen.getByText(/store/i))
      })
      expect(screen.getByRole('heading', /products/i)).toBeInTheDocument()
  })
  
  it('navigates to home page on click', async () => {
      render(
          <Nav cart={cart}/>, {wrapper: BrowserRouter}
      )
      await act ( async () => { userEvent.click(screen.getByText(/home/i))
      })
      expect(screen.getByRole('heading', /check out our new candle collection/i)).toBeInTheDocument()
  })
  
  it('navigates to shopping bag on click', async () => {
      render(
          <Nav cart={cart}/>, {wrapper: BrowserRouter}
      )
      await act ( async () => { userEvent.click(screen.getByAltText(/shopping cart/i))
      })
      expect(screen.getByRole('heading', /check out/i)).toBeInTheDocument()
  })
  
})