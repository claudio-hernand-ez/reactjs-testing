import { fireEvent, screen } from '@testing-library/react';
import { Cart } from '..';
import { renderWithRouter } from '../../../utils/renderWithRouter';
import { CartItemProps } from '../components/CartItem';

jest.mock('../components/CartItem', () => ({
  CartItem: ({ product }: CartItemProps) => {
    const { name, price, picture } = product;
    return (
      <div>
        {name} {price} {picture}
      </div>
    );
  },
}));

describe('Cart', () => {
  describe('without products', () => {
    const stubCartHook = () => ({
      products: [],
      removeFromCart: () => {},
      totalPrice: () => 0,
    });

    it('renders empty cart message', () => {
      const { container } = renderWithRouter(
        <Cart useCartHook={stubCartHook} />
      );
      expect(container.innerHTML).toMatch('Your cart is empty.');
    });

    describe("on 'Back to main page' click", () => {
      it("redirects to '/'", () => {
        const { history } = renderWithRouter(
          <Cart useCartHook={stubCartHook} />
        );

        fireEvent.click(screen.getByText('Back to main page.'));

        expect(history.location.pathname).toBe('/');
      });
    });
  });

  describe('with products', () => {
    const products = [
      {
        name: 'Product foo',
        price: 100,
        picture: '/image/foo_source.png',
      },
      {
        name: 'Product bar',
        price: 100,
        picture: '/image/bar_source.png',
      },
    ];

    const stubCartHook = () => ({
      products,
      removeFromCart: () => {},
      totalPrice: () => 55,
    });

    it('renders cart products list with total price', () => {
      const { container } = renderWithRouter(
        <Cart useCartHook={stubCartHook} />
      );

      expect(container.innerHTML).toMatch(
        'Product foo 100 /image/foo_source.png'
      );
      expect(container.innerHTML).toMatch(
        'Product bar 100 /image/bar_source.png'
      );
      expect(container.innerHTML).toMatch('Total: 55 coins');
    });

    describe("on 'go to checkout' click", () => {
      it("redirects to '/checkout'", () => {
        const { history } = renderWithRouter(
          <Cart useCartHook={stubCartHook} />,
          { route: '/checkout' }
        );

        fireEvent.click(screen.getByText('Go to checkout'));

        expect(history.location.pathname).toBe('/checkout');
      });
    });
  });
});
