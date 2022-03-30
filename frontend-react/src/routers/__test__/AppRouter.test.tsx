import { renderWithRouter } from '../../utils/renderWithRouter';
import { AppRouter } from '../AppRouter';

// jest.mock : nos permite burlar modulos completos.
// Mock significa que sustituimos el objeto real por un objeto falso que imita su comportamiento

// Definimos nuestros mock de las dependencias de AppRouter
jest.mock('../../pages/Home', () => ({ Home: () => <div>Home</div> }));
jest.mock('../../pages/cart', () => ({ Cart: () => <div>Cart</div> }));
jest.mock('../../pages/checkout', () => ({
  Checkout: () => <div>Checkout</div>,
}));
jest.mock('../../pages/orderSummary', () => ({
  OrderSummary: () => <div>Order summary</div>,
}));

describe('routing', () => {
  // Renderizamos el componente segun la ruta especificada
  it("renders home page on '/'", () => {
    // Configuración inicial + Renderizado
    const { container } = renderWithRouter(<AppRouter />, { route: '/' });
    // Expectativa - Que estemos en la página home
    expect(container.innerHTML).toMatch('Home');
  });

  it("renders checkout page on '/cart'", () => {
    const { container } = renderWithRouter(<AppRouter />, { route: '/cart' });
    expect(container.innerHTML).toMatch('Cart');
  });

  it("renders checkout page on '/checkout'", () => {
    const { container } = renderWithRouter(<AppRouter />, {
      route: '/checkout',
    });
    expect(container.innerHTML).toMatch('Checkout');
  });

  it("renders order summary page on '/order'", () => {
    const { container } = renderWithRouter(<AppRouter />, {
      route: '/order',
    });
    expect(container.innerHTML).toMatch('Order summary');
  });

  it("renders 'page not found' message on nonexistent route", () => {
    const { container } = renderWithRouter(<AppRouter />, {
      route: '/this-route-does-not-exist',
    });

    expect(container.innerHTML).toMatch('Page not found');
  });
});
