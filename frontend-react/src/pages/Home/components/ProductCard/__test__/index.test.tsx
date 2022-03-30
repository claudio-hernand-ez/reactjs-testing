import { render, fireEvent, screen } from '@testing-library/react';
import { ProductCard } from '..';
import { Product } from '../../../../../types/Product';

describe('ProductCard', () => {
  const product: Product = {
    name: 'Product foo',
    price: 55,
    picture: 'test.jpg',
    category: {
      name: 'category',
      items: [],
    },
  };

  it('renders correctly', () => {
    const { container } = render(<ProductCard datum={product} />);

    expect(container.innerHTML).toMatch('Product foo');
    expect(container.innerHTML).toMatch('55 coin');
    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      '/images/category/test.jpg.png'
    );
  });

  describe('when product is in the cart', () => {
    it("the 'Add to cart' button is disabled", () => {
      const mockUseCartHook = () => ({
        addToCart: () => {},
        products: [product],
      });

      render(
        <ProductCard datum={product} useCartHook={mockUseCartHook as any} />
      );
      expect(screen.getByRole('button')).toBeDisabled();
    });
  });

  describe('when product is not in the cart', () => {
    describe("on 'Add to cart' click", () => {
      it("calls 'addToCart' function", () => {
        const addToCart = jest.fn();
        const mockUseCartHook = () => ({
          addToCart,
          products: [],
        });

        render(<ProductCard datum={product} useCartHook={mockUseCartHook} />);

        fireEvent.click(screen.getByText('Add to cart'));
        expect(addToCart).toHaveBeenCalledWith(product);
      });
    });
  });
});
