import { fireEvent, screen } from '@testing-library/react';
import { CartWidget } from '..';
import { renderWithRouter } from '../../../../../utils/renderWithRouter';

/**
 * Primero probamos la navegación
 *
 * Luego, el componente simplemente muestra los productos en el carrito de compra
 * Toma el valor proporcionado por CartContext a través del hook useCartContext{
 * Basicamente toma los productos
 */
describe('CartWidget', () => {
  // it.todo('shows the amount of products in the cart');
  it('shows the amount of products in the cart', () => {
    const stubCartHook = () => ({
      products: [
        {
          name: 'Product foo',
          price: 0,
          picture: 'image.png',
        },
      ],
    });
    const { container } = renderWithRouter(
      <CartWidget useCartHook={stubCartHook} />
    );
    expect(container.innerHTML).toMatch('1');
  });

  // it.todo('navigates to cart summary page on click');
  it('navigates to cart summary page on click', () => {
    const { history } = renderWithRouter(<CartWidget />, { route: '/cart' });

    fireEvent.click(screen.getByRole('link'));

    expect(history.location.pathname).toEqual('/cart');
  });
});
