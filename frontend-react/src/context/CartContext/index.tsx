import React from 'react';
import { useCart } from '../../hooks/useCart';

type CartContextValue = ReturnType<typeof useCart>;

export const CartContext = React.createContext({} as CartContextValue);

// Puede recibir un hook que maneje el estado global
// Si no se recibe, se setea por defecto
interface CartProviderProps {
  useCartHook?: typeof useCart;
}

export const CartProvider = ({
  children,
  useCartHook = useCart,
}: React.PropsWithChildren<CartProviderProps>) => {
  const value = useCartHook();

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCartContext = () => React.useContext(CartContext);
