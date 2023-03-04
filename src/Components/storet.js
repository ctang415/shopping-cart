import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/'
import { ItemOne, ItemTwo, ItemThree, ItemFour, ItemFive, ItemSix } from "./Images";
import { act } from 'react-dom/test-utils';
import Store from './Store';

const listOfProducts = [ 
    {url: ItemOne, name:'Forest', price: 24.99}, {url:ItemTwo, name:'Amber', price: 19.99}, 
    {url: ItemThree, name:'Smokey Wood', price: 29.99}, {url: ItemFour, name:'Pine Forest', price: 24.99}, 
    {url: ItemFive, name:'Bergamot', price: 19.99}, {url: ItemSix, name: 'Sev', price: 14.99} 
  ];

jest.mock('./Store', () => ({ products }) => <div data-test-id="products">{products}:{products}</div>)

describe('Store component', () => {
    it('renders correctly', () => {
      
      render(<Store/>)
      expect(screen.getByText(/forest/i)).toBeInTheDocument()
    })
  })