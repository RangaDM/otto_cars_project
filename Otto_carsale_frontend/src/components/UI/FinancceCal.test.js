import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FinanceCal from './FinanceCal';

test('renders FinanceCal without crashing', () => {
  render(<FinanceCal />);
});

test('shows error message when invalid data is entered', () => {
  render(<FinanceCal />);
  
  const amountInput = screen.getByLabelText('Amount');
  const downPaymentInput = screen.getByLabelText('Down Payment');
  const interestRateInput = screen.getByLabelText('Interest Rate');
  const loanTermInput = screen.getByLabelText('Loan Term');
  const calculateButton = screen.getByText('Calculate');

  // Enter invalid data
  fireEvent.change(amountInput, { target: { value: '1000' } });
  fireEvent.change(downPaymentInput, { target: { value: '2000' } }); // Down payment is more than amount
  fireEvent.change(interestRateInput, { target: { value: '5' } });
  fireEvent.change(loanTermInput, { target: { value: '10' } });
  fireEvent.click(calculateButton);

  // Check if the error message is displayed
  expect(screen.getByText('Down payment must be less than amount')).toBeInTheDocument();
});