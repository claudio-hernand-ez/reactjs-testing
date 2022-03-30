import React from 'react';
import { useCartContext } from '../../../../context/CartContext';
import { Product } from '../../../../types/Product';
import { Button, ButtonDisabled, Container } from './styles';

export interface ProductCardProps {
  datum: Product;
  useCartHook?: () => Pick<
    ReturnType<typeof useCartContext>,
    'products' | 'addToCart'
  >;
}

export const ProductCard = ({
  datum,
  useCartHook = useCartContext,
}: ProductCardProps) => {
  const { addToCart, products } = useCartHook();

  const isInCart = !!products?.find((product) => datum.name === product.name);

  return (
    <Container>
      <img
        style={{ imageRendering: 'pixelated' }}
        src={`/images/${datum.category?.name}/${datum.picture}.png`}
        width="64px"
        height="64px"
        alt="imagee"
      />
      <p>{datum.name}</p>
      <p>{datum.price} coin</p>
      {isInCart ? (
        <ButtonDisabled disabled>Added to cart</ButtonDisabled>
      ) : (
        <Button
          onClick={() => {
            addToCart(datum);
          }}
        >
          Add to cart
        </Button>
      )}
    </Container>
  );
};
