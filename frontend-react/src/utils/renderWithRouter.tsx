import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { BrowserRouter } from 'react-router-dom';

export const renderWithRouter = (ui: any, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  const history = createMemoryHistory();

  if (route) {
    history.push(route);
  }

  return { ...render(ui, { wrapper: BrowserRouter }), history };
};
