import React from 'react';
import { Header } from '../components/Header';
import { AppRouter } from '../routers/AppRouter';

/* 
  Es componente funcional que se encarga de renderizar el layout de la aplicación
  por lo que solo deberiamos testear que al menos se renderice
*/

export const App = () => {
  return (
    <>
      <Header />
      <AppRouter />
    </>
  );
};
