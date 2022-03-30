export const getProducts = () => {
  return fetch('http://localhost:8080/api/products')
    .then((res) => {
      return res.json();
    })
    .catch(console.log);
};
