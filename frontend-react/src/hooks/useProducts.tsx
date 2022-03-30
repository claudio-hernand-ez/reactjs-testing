import React from 'react';
import { getProducts } from '../services/product';
import { Category } from '../types/Category';

export const useProducts = (apiGetProducts = getProducts) => {
  const [categories, setCategories] = React.useState<Category[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await apiGetProducts();
        setCategories(data.categories || []);
      } catch (error) {
        setError(Boolean(error));
      }
      setIsLoading(false);
    };
    fetchProducts();
  }, []);

  return { categories, isLoading, error };
};
