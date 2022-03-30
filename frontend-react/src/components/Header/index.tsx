import React from 'react';
import { Link } from 'react-router-dom';
import { CartWidget } from './components/CartWidget';
import { StyledHeader, Container, Brand } from './styles';

export const Header = () => (
  <StyledHeader>
    <Container>
      <Brand>
        <Link to="/">
          <h1>NTT Store</h1>
        </Link>
        <p>Everything for your testing adventure</p>
      </Brand>
      <CartWidget />
    </Container>
  </StyledHeader>
);
