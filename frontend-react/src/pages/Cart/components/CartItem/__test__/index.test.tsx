import { fireEvent, screen } from '@testing-library/react';
import { CartItem } from '..';
import { Product } from '../../../../../types/Product';
import { renderWithRouter } from '../../../../../utils/renderWithRouter';

describe('CartItem', () => {
  const product: Product = {
    name: 'Product Foo',
    price: 100,
    picture: 'source',
    category: {
      name: 'category',
      items: [],
    },
  };

  it('renders correctly', () => {
    const { container } = renderWithRouter(
      <CartItem product={product} removeFromCart={() => {}} />
    );

    expect(container.innerHTML).toMatch('Product Foo');
    expect(container.innerHTML).toMatch('100 coins');
    expect(screen.getByAltText('Product Foo')).toHaveAttribute(
      'src',
      '/images/category/source.png'
    );
  });

  describe("on 'Remove' click", () => {
    it('calls passed in function', () => {
      const removeFromCartMock = jest.fn();

      renderWithRouter(
        <CartItem product={product} removeFromCart={removeFromCartMock} />
      );

      fireEvent.click(screen.getByText('Remove'));

      expect(removeFromCartMock).toBeCalledWith(product);
    });
  });
});
