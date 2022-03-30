import { App } from '../App';
// import { render } from '@testing-library/react';
// import { MemoryRouter } from 'react-router-dom';
import { renderWithRouter } from '../../utils/renderWithRouter';

/**
 * Envolvemos todo el bloque de prueba dentro de un bloque describe()
 * De manera que todos los casos de prueba esten relacionados con la prueba del componente
 */

describe('App', () => {
  /**
   * Dentro de la descripción tenemos un bloque it()
   * los cuales contienen pruebas individuales
   *
   * Cada bloque it debería probar un aspecto de la entidad probada
   */

  // Probamos que nuestro componente App se ejecuta con éxito
  it('renders successfully', () => {
    // Deberia fallar ya que cuando ocupamos react router es
    // Nuestro componente Las rutas deben estar envueltas en un router
    // const { container } = render(<App />);

    // Util si no lo utilizamos muchas veces
    // const { container } = render(<App />, { wrapper: MemoryRouter });

    const { container } = renderWithRouter(<App />);
    // Comparamos que el valor
    expect(container.innerHTML).toMatch('NTT Store');
  });

  it('funcionalidad a testear', () => {
    // Configuración inicial
    // --> Configuramos el componente con el enrutador, si es necesario
    // Renderizado
    // --> Utilizamos render de testing-react-library para renderizar y montar el componente
    // Expectativa
    // --> Hacemos uso de expect para comprobar que el caso de prueba se cumpla
  });
});
