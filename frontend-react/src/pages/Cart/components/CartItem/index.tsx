import React from 'react';
import { Product } from '../../../../types/Product';
import { Item, Button } from './styles';

export interface CartItemProps {
  product: Product;
  removeFromCart: (product: Product) => void;
}

export const CartItem = ({ product, removeFromCart }: CartItemProps) => {
  return (
    <Item>
      <img
        style={{ imageRendering: 'pixelated' }}
        src={`/images/${product.category?.name}/${product.picture}.png`}
        width="64px"
        height="64px"
        alt={product.name}
      />
      <p>{product.name}</p>
      <p>{product.price} coins</p>
      <Button
        onClick={() => {
          removeFromCart(product);
        }}
      >
        Remove
      </Button>
    </Item>
  );
};
