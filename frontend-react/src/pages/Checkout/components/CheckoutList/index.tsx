import React from 'react';
import { Product } from '../../../../types/Product';
import { Items } from './styles';

export interface CheckoutListProps {
  products: Product[];
}

export const CheckoutList = ({ products }: CheckoutListProps) => {
  return (
    <Items className="nes-list is-circle">
      {products.map((product) => {
        return <li key={product.name}>{product.name}</li>;
      })}
    </Items>
  );
};
