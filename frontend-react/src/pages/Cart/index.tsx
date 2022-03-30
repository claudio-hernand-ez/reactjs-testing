import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import { Product } from '../../types/Product';
import { CartItem } from './components/CartItem';
import { CardItems, Container, H3, Button } from './styles';

interface CartProps {
  useCartHook?: () => {
    products: Product[];
    removeFromCart: (product: Product) => void;
    totalPrice: () => number;
  };
}

export const Cart = ({ useCartHook = useCartContext }: CartProps) => {
  const { products, removeFromCart, totalPrice } = useCartHook();
  if (!products.length) {
    return (
      <>
        Your cart is empty. <Link to="/">Back to main page.</Link>
      </>
    );
  }

  return (
    <Container>
      <H3>Cart Summary</H3>
      <CardItems>
        {products.map((datum) => (
          <CartItem
            key={datum.name}
            product={datum}
            removeFromCart={removeFromCart}
          />
        ))}
        <p>Total: {totalPrice()} coins</p>
      </CardItems>
      <div>
        <Link to="/checkout">
          <Button>Go to checkout</Button>
        </Link>
      </div>
    </Container>
  );
};
