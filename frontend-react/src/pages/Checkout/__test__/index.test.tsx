import { render } from '@testing-library/react';
import { Checkout } from '..';
// import { renderWithRouter } from '../../../utils/renderWithRouter';
// import { CheckoutForm } from '../components/CheckoutForm';
// import { CheckoutList } from '../components/CheckoutList';

jest.mock('../components/CheckoutForm', () => ({
  CheckoutForm: () => <div>CheckoutForm</div>,
}));

jest.mock('../components/CheckoutList', () => ({
  CheckoutList: () => <div>CheckoutList</div>,
}));

describe('Checkout', () => {
  afterEach(jest.clearAllMocks);

  const products = [
    {
      name: 'Product foo',
      price: 0,
      picture: 'image.png',
      category: {
        name: 'category',
        items: [],
      },
    },
  ];
  const stubCartHook = () => ({
    products,
    clearCart: () => {},
    totalPrice: () => 55,
  });

  it('shows total price', () => {
    const { container } = render(
      <Checkout useCartHook={stubCartHook as any} />
    );
    expect(container.innerHTML).toMatch('Total: 55 coins');
  });

  // it('passes products to CheckoutList', () => {
  //   render(<Checkout useCartHook={stubCartHook as any} />);
  //   expect(CheckoutList).toHaveBeenCalledWith({ products }, {});
  // });

  // it('renders checkout form', () => {
  //   render(<Checkout useCartHook={stubCartHook as any} />);
  //   expect(CheckoutForm).toHaveBeenCalled();
  // });
});
