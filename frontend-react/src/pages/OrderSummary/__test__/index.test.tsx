import { render, fireEvent, screen } from '@testing-library/react';
import { OrderSummary } from '..';
import { renderWithRouter } from '../../../utils/renderWithRouter';

describe('OrderSummary', () => {
  describe('while order data being loaded', () => {
    it('renders loader', () => {
      const stubUseOrder = () => ({
        isLoading: true,
        order: undefined,
      });

      render(<OrderSummary useOrderHook={stubUseOrder} />);
      expect(screen.getByTestId('Loader')).toBeInTheDocument();
    });
  });

  describe('when order is loaded', () => {
    const stubUseOrder = () => ({
      isLoading: false,
      order: {
        products: [
          {
            name: 'Product foo',
            price: 10,
            picture: 'image.png',
          },
        ],
      },
    });

    it('renders order info', () => {
      const { container } = renderWithRouter(
        <OrderSummary useOrderHook={stubUseOrder} />
      );

      expect(container.innerHTML).toMatch('Product foo');
    });

    it('navigates to main page on button click', () => {
      const { history } = renderWithRouter(
        <OrderSummary useOrderHook={stubUseOrder} />
      );

      fireEvent.click(screen.getByText('Back to the store'));

      expect(history.location.pathname).toEqual('/');
    });
  });

  describe('without order', () => {
    it('renders error message', () => {
      const stubUseOrder = () => ({
        isLoading: false,
        order: undefined,
      });

      const { container } = render(
        <OrderSummary useOrderHook={stubUseOrder} />
      );

      expect(container.innerHTML).toMatch("Couldn't load order info.");
    });
  });
});
