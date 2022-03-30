import React from 'react';
import { getOrder } from '../services/order';
import { Product } from '../types/Product';

export interface Order {
  products: Product[];
}

const getOrderId = () => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('orderId');
};

export const useOrder = () => {
  const [order, setOrder] = React.useState<Order>();
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      const orderId = getOrderId();
      if (!orderId) {
        return;
      }
      const { data: order } = await getOrder(orderId);
      if (order) {
        setOrder(order);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return { order, isLoading };
};
