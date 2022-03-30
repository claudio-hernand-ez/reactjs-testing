import { fireEvent, screen } from '@testing-library/react';
import { Header } from '..';
import { renderWithRouter } from '../../../utils/renderWithRouter';

jest.mock('../components/CartWidget', () => ({
  CartWidget: () => <div>Cart widget</div>,
}));

describe('Header', () => {
  it('renders correctly', () => {
    const { container } = renderWithRouter(<Header />);

    expect(container.innerHTML).toMatch('NTT Store');
    expect(container.innerHTML).toMatch('Cart widget');
  });

  it('navigates to / on header title click', () => {
    const { history } = renderWithRouter(<Header />);

    fireEvent.click(screen.getByText('NTT Store'));

    expect(history.location.pathname).toEqual('/');
  });
});
