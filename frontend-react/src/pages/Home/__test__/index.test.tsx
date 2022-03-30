import { render } from '@testing-library/react';
import { Home } from '..';
import { Category } from '../../../types/Category';
import { ProductCardProps } from '../components/ProductCard';

jest.mock('../components/ProductCard', () => ({
  ProductCard: ({ datum }: ProductCardProps) => {
    const { name, price, picture } = datum;
    return (
      <div>
        {name} {price} {picture}
      </div>
    );
  },
}));

describe('Home', () => {
  describe('while loading', () => {
    // it.todo('renders loader');
    it('renders loader', () => {
      const mockUseProducts = () => ({
        categories: [],
        isLoading: true,
        error: false,
      });

      const { container } = render(<Home useProductsHook={mockUseProducts} />);

      expect(container.innerHTML).toMatch('Loading');
    });
  });

  describe('with data', () => {
    const category: Category = {
      name: 'Category Foo',
      items: [
        {
          name: 'Product foo',
          price: 55,
          picture: '/test.jpg',
        },
      ],
    };
    // it.todo('renders categories with products');
    it('renders categories with products', () => {
      const mockUseProducts = () => ({
        categories: [category],
        isLoading: false,
        error: false,
      });

      const { container } = render(<Home useProductsHook={mockUseProducts} />);

      expect(container.innerHTML).toMatch('Category Foo');
      expect(container.innerHTML).toMatch('Product foo 55 /test.jpg');
    });
  });

  describe('with error', () => {
    // it.todo('renders error message');
    it('renders error message', () => {
      const mockUseProducts = () => ({
        categories: [],
        isLoading: false,
        error: true,
      });

      const { container } = render(<Home useProductsHook={mockUseProducts} />);

      expect(container.innerHTML).toMatch('Error');
    });
  });
});
