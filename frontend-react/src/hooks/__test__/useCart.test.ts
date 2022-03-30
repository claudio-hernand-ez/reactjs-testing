import { renderHook } from '@testing-library/react-hooks';
import TestRenderer from 'react-test-renderer';
import { Product } from '../../types/Product';
import { useCart } from '../useCart';
const { act } = TestRenderer;

const localStorageMock = (() => {
  let store: { [key: string]: string } = {};
  return {
    clear: () => {
      store = {};
    },
    getItem: jest.fn((key: string) => {
      return store[key] || null;
    }),
    removeItem: (key: string) => {
      delete store[key];
    },
    setItem: jest.fn((key: string, value: string) => {
      store[key] = value ? value.toString() : '';
    }),
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

describe('useCart', () => {
  afterEach(() => {
    localStorageMock.clear();
  });

  describe('on mount', () => {
    it('it loads data from localStorageMock', () => {
      renderHook(useCart);
      expect(localStorageMock.getItem).toHaveBeenCalledWith('products');
    });
  });

  describe('#addToCart', () => {
    it('adds item to the cart', () => {
      const product: Product = {
        name: 'Product foo',
        price: 0,
        picture: 'image.jpg',
      };
      const { result } = renderHook(useCart);

      act(() => {
        result.current.addToCart(product);
      });

      expect(result.current.products).toEqual([product]);
      expect(localStorageMock.setItem).toHaveBeenCalledWith(
        'products',
        JSON.stringify([product])
      );
    });
  });

  describe('#removeFromCart', () => {
    it('removes item from the cart', () => {
      const product: Product = {
        name: 'Product foo',
        price: 0,
        picture: 'image.jpg',
      };
      localStorageMock.setItem('products', JSON.stringify([product]));

      const { result } = renderHook(useCart);

      act(() => {
        result.current.removeFromCart(product);
      });

      expect(result.current.products).toEqual([]);
      expect(localStorageMock.setItem).toHaveBeenCalledWith('products', '[]');
    });
  });

  describe('#totalPrice', () => {
    it('returns total products price', () => {
      const product: Product = {
        name: 'Product foo',
        price: 21,
        picture: 'image.jpg',
      };
      const { result } = renderHook(useCart);

      act(() => {
        result.current.addToCart(product);
      });

      expect(result.current.totalPrice()).toEqual(21);
    });
  });

  describe('#clearCart', () => {
    it('removes all the products from the cart', () => {
      const product: Product = {
        name: 'Product foo',
        price: 21,
        picture: 'image.jpg',
      };
      localStorageMock.setItem('products', JSON.stringify([product, product]));
      const { result } = renderHook(useCart);

      act(() => {
        result.current.clearCart();
      });

      expect(result.current.products).toEqual([]);
      expect(localStorageMock.setItem).toHaveBeenCalledWith('products', '[]');
    });
  });
});
