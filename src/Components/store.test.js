import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/'
import { ItemOne, ItemTwo, ItemThree, ItemFour, ItemFive, ItemSix } from "./Images";
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';
import Store from './Store';

describe('Store component', () => {

  const products = [ 
    {url: ItemOne, name:'Forest', price: 24.99}, {url:ItemTwo, name:'Amber', price: 19.99}, 
    {url: ItemThree, name:'Smokey Wood', price: 29.99}, {url: ItemFour, name:'Pine Forest', price: 24.99}, 
    {url: ItemFive, name:'Bergamot', price: 19.99}, {url: ItemSix, name: 'Sev', price: 14.99} 
  ];

    it('renders correctly', async () => {
      const {getByText} = render(<MemoryRouter><Store products={products}/></MemoryRouter>)
      expect(getByText(/amber/i)).toBeInTheDocument()
      expect(getByText(/bergamot/i)).toBeInTheDocument()
      expect(getByText(/sev/i)).toBeInTheDocument()
      expect(getByText(/smokey wood/i)).toBeInTheDocument()
    })

    it('clicking on product will go product page', async () => {
      render(<MemoryRouter initialEntries={['/store/amber']}><Store products={products}/></MemoryRouter>)
      await act ( async () => { userEvent.click(screen.getByRole('link', {name: /amber/i } ))})
      expect(window.location.pathname).toBe('store/amber/')
    })

  })