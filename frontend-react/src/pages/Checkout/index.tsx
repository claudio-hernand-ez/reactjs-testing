import React from 'react';
import { useCartContext } from '../../context/CartContext';
import { postCheckout } from '../../services/order';
import { CheckoutForm } from './components/CheckoutForm';
import { CheckoutList } from './components/CheckoutList';
import { Container, H1, Wrapper } from './styles';

interface CheckoutProps {
  useCartHook?: typeof useCartContext;
}

export const Checkout = ({ useCartHook = useCartContext }: CheckoutProps) => {
  const { products, totalPrice, clearCart } = useCartHook();

  const submitCheckout = async () => {
    const { data } = await postCheckout({
      products,
    });
    clearCart();
    window.location.assign(`/order/?orderId=${data.newOrder._id}`);
  };

  return (
    <Container>
      <H1>Checkout</H1>
      <Wrapper>
        <p>You are going to buy:</p>
        <CheckoutList products={products} />
        <p>Total: {totalPrice()} coins</p>
      </Wrapper>
      <p>Enter your payment credentials:</p>
      <CheckoutForm submit={submitCheckout} />
    </Container>
  );
};
