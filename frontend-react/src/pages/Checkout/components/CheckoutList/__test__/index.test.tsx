import { render } from '@testing-library/react';
import { CheckoutList } from '..';
import { Product } from '../../../../../types/Product';

describe('CheckoutList', () => {
  it('renders list of products', () => {
    const products: Product[] = [
      {
        name: 'Product foo',
        price: 10,
        picture: '/image.png',
      },
      {
        name: 'Product bar',
        price: 10,
        picture: '/image.png',
      },
    ];

    const { container } = render(<CheckoutList products={products} />);
    expect(container.innerHTML).toMatch('Product foo');
    expect(container.innerHTML).toMatch('Product bar');
  });
});
