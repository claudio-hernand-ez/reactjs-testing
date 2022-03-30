import React from 'react';
import { Link } from 'react-router-dom';
import { Loader } from '../../components/Loader';
import { useOrder } from '../../hooks/useOrder';
import { Container, H1, Wrapper, Button } from '../Checkout/styles';

interface OrderSummaryProps {
  useOrderHook?: typeof useOrder;
}

export const OrderSummary = ({
  useOrderHook = useOrder,
}: OrderSummaryProps) => {
  const { isLoading, order } = useOrderHook();

  if (isLoading) {
    return <Loader />;
  }

  if (!order) {
    return <div>Couldn't load order info.</div>;
  }

  return (
    <Container>
      <H1>Order Summary</H1>
      <Wrapper>
        <ul className="nes-list is-circle">
          {order.products.map((product) => {
            return <li key={product.name}>{product.name}</li>;
          })}
        </ul>
      </Wrapper>
      <Link to="/">
        <Button>Back to the store</Button>
      </Link>
    </Container>
  );
};
