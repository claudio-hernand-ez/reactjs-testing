import React from 'react';
import { Product } from '../types/Product';

// Guardar productos localmente
const saveProducts = (products: Product[]) => {
  localStorage.setItem('products', JSON.stringify(products));
};

export const useCart = () => {
  // Productos dentro del Carrito
  const [products, setProducts] = React.useState<Product[]>([]);

  // Recuperar productos desde el almacenamiento local
  React.useEffect(() => {
    try {
      const storedProducts = localStorage.getItem('products');
      const parsedProducts = storedProducts ? JSON.parse(storedProducts) : [];
      setProducts(parsedProducts);
    } catch (error) {}
  }, []);

  // Agregar nuevo producto al carrito
  const addToCart = (newProduct: Product) => {
    if (products.find((product) => newProduct.name === product.name)) {
      return;
    }
    const newProducts = [...products, newProduct];
    setProducts(newProducts);
    saveProducts(newProducts);
  };

  // Remover un producto del carrito
  const removeFromCart = (product: Product) => {
    const newProducts = products.filter((p) => {
      return p.name !== product.name;
    });
    setProducts(newProducts);
    saveProducts(newProducts);
  };

  // Limpiar carrito
  const clearCart = () => {
    setProducts([]);
    saveProducts([]);
  };

  // Precio total de los productos dentro del carrito
  const totalPrice = () => {
    return products.reduce((total: number, product) => {
      return total + Number(product.price);
    }, 0);
  };

  return {
    products,
    totalPrice,
    addToCart,
    removeFromCart,
    clearCart,
  };
};
