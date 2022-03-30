import { Product } from '../../types/Product';

export interface CheckoutPayload {
  products: Product[];
}
export const postCheckout = (data: CheckoutPayload) => {
  return fetch(`http://localhost:8080/api/orders/`, {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },

    body: JSON.stringify(data),
  })
    .then((res) => {
      return res.json();
    })
    .catch(console.log);
};

export const getOrder = (id: string) => {
  return fetch(`http://localhost:8080/api/orders/${id}`)
    .then((res) => {
      return res.json();
    })
    .catch(console.log);
};
