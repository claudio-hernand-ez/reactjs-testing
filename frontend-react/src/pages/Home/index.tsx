import React from 'react';
import { useProducts } from '../../hooks/useProducts';
import { ProductCard } from './components/ProductCard';
import { Category, H2, Items } from './styles';

interface HomeProps {
  useProductsHook?: () => Pick<
    ReturnType<typeof useProducts>,
    'categories' | 'isLoading' | 'error'
  >;
}

export const Home = ({ useProductsHook = useProducts }: HomeProps) => {
  const { categories, isLoading, error } = useProductsHook();

  if (isLoading) {
    return <>Loading...</>;
  }

  if (error) {
    return <>Error</>;
  }

  return (
    <>
      {categories.map((category, index) => {
        return (
          <Category key={category.name}>
            <H2>{category.name}</H2>
            <Items>
              {category.items.map((item) => {
                return <ProductCard key={item.name} datum={item} />;
              })}
            </Items>
          </Category>
        );
      })}
    </>
  );
};
