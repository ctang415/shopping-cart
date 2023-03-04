import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/'
import App from './App';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';
import Nav from './Nav';


describe('Main app component', () => {

})

/*
describe('Full app', () => {

  it('renders the background', () => {
    const {getByAltText} = render(<RouteSwitch/>)
    expect(getByAltText(/Candles/i)).toHaveAttribute('src', 'pratikasha-mohanty.jpg')
  })

  it('goes to store page on button click', async () => {
    render(
      <RouteSwitch/>
    )

    const button = screen.getByRole('button', {name: 'Shop now'})
    await act( async () => { userEvent.click(button)
    })
    expect(screen.getByText(/products/i)).toBeInTheDocument()
  });


})
*/

describe('Nav component', () => {

  it('navigates to store page on click', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Nav/>
      </MemoryRouter>
    )

    await act ( async () => { userEvent.click(screen.getByText(/store/i))
    })
    expect(screen.getByText(/products/i)).toBeInTheDocument()

  })

  it('navigates to home page on click', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Nav/>
      </MemoryRouter>
    )
    await act ( async () => { userEvent.click(screen.getByText(/home/i))
    })
    expect(screen.getByText(/check out our new candle collection/i)).toBeInTheDocument()
  })

  it('navigates to shopping bag on click', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Nav/>
      </MemoryRouter>
    )
    await act ( async () => { userEvent.click(screen.getByAltText(/shopping cart/i))
    })
    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument()
  })

})