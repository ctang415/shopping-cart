import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/'
import { ItemOne, ItemTwo, ItemThree, ItemFour, ItemFive, ItemSix } from "./Images";
import { BrowserRouter } from 'react-router-dom';
import Store from './Store';


describe('Store component', () => {

  const products = [ 
    {url: ItemOne, name:'Forest', price: 24.99}, {url:ItemTwo, name:'Amber', price: 19.99}, 
    {url: ItemThree, name:'Smokey Wood', price: 29.99}, {url: ItemFour, name:'Pine Forest', price: 24.99}, 
    {url: ItemFive, name:'Bergamot', price: 19.99}, {url: ItemSix, name: 'Sev', price: 14.99} 
  ];

    it('renders correctly', async () => {
      const {getByText} = render(<Store products={products}/>, {wrapper: BrowserRouter})
      expect(getByText(/amber/i)).toBeInTheDocument()
      expect(getByText(/bergamot/i)).toBeInTheDocument()
      expect(getByText(/sev/i)).toBeInTheDocument()
      expect(getByText(/smokey wood/i)).toBeInTheDocument()
    })
  })