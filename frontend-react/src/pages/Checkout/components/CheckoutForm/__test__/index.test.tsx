import { render, fireEvent, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { CheckoutForm } from '..';

describe('CheckoutForm', () => {
  // afterAll(jest.clearAllMocks);

  it('renders correctly', () => {
    const { container } = render(<CheckoutForm />);

    expect(container.innerHTML).toMatch('Cardholders Name');
    expect(container.innerHTML).toMatch('Card Number');
    expect(container.innerHTML).toMatch('Expiration Date');
    expect(container.innerHTML).toMatch('CVV');
  });

  describe('with invalid inputs', () => {
    it('shows errors', async () => {
      const { container } = render(<CheckoutForm />);

      // con act nos aseguramos de que se procesen las actualizaciones en el DOM
      await act(async () => {
        fireEvent.click(screen.getByText('Place order'));
      });

      expect(container.innerHTML).toMatch('Error:');
    });
  });

  describe('with valid inputs', () => {
    describe('on place order button click', () => {
      it('calls submit function with form data', async () => {
        const mockSubmit = jest.fn();

        render(<CheckoutForm submit={mockSubmit} />);

        await act(async () => {
          fireEvent.change(screen.getByLabelText('Cardholders Name:'), {
            target: { value: 'Bibo Bobbins' },
          });
          fireEvent.change(screen.getByLabelText('Card Number:'), {
            target: { value: '0000 0000 0000 0000' },
          });
          fireEvent.change(screen.getByLabelText('Expiration Date:'), {
            target: { value: '3020-05' },
          });
          fireEvent.change(screen.getByLabelText('CVV:'), {
            target: { value: '123' },
          });
        });

        await act(async () => {
          fireEvent.click(screen.getByText('Place order'));
        });

        expect(mockSubmit).toHaveBeenCalled();
      });
    });
  });
});
