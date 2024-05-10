import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Login from './Login';
import axios from 'axios';

jest.mock('axios');

test('renders login form', () => {
  const { getByLabelText } = render(<Login />);
  const emailInput = getByLabelText('Email');
  const passwordInput = getByLabelText('Password');
  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
});

test('submits form data', async () => {
  axios.post.mockResolvedValueOnce({ data: { token: '123' } });
  const { getByLabelText, getByText } = render(<Login />);
  const emailInput = getByLabelText('Email');
  const passwordInput = getByLabelText('Password');
  const submitButton = getByText('Submit');

  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'password' } });
  fireEvent.click(submitButton);

  await waitFor(() => expect(axios.post).toHaveBeenCalled());
});