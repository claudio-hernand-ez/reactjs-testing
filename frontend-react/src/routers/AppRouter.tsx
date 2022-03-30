import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Cart } from '../pages/Cart';
import { Home } from '../pages/Home';
import { Checkout } from '../pages/Checkout';
import { OrderSummary } from '../pages/OrderSummary';

const Container = styled.div`
  max-width: 980px;
  margin: 0 auto;
  margin-top: 150px;
  margin-bottom: 100px;
`;
// Dentro de app router deberiamos probar que la navegación se cumpla y se rendericen los componentes correctos
export const AppRouter = () => {
  return (
    <Container>
      <Routes>
        {/* 
          Nuestro componente de rutas contiene otros componentes que se renderizan
          por lo que nos conviene burlar estas dependencias y hacer mocks, para evitar
          tener que la configuración del test unitario sea muy dificil
        */}
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order" element={<OrderSummary />} />
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </Container>
  );
};
