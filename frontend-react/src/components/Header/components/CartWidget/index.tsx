import { Link } from 'react-router-dom';
import { useCartContext } from '../../../../context/CartContext';
import { Container, Span } from './styles';

interface CartWidgetProps {
  // ReturnType - construye el tipo a partir del tipo de retorno de la función.
  // Pick - nos permite crear un tipo con un subconjunto de campos
  // ExampleType { foo: string; bar: number; }
  // Pick<ExampleType, 'bar'> // { bar: number }
  useCartHook?: () => Pick<ReturnType<typeof useCartContext>, 'products'>;
}

export const CartWidget = ({
  useCartHook = useCartContext,
}: CartWidgetProps) => {
  const { products } = useCartHook();

  return (
    <Container>
      <Link to="/cart">
        <Span>{products?.length || 0}</Span>
        <img src={'/images/cart.svg'} width="64" height="64" alt="cart" />
      </Link>
    </Container>
  );
};
