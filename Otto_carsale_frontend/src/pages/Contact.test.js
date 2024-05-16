import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from './Contact';

test('renders Contact without crashing', () => {
  render(<Contact />);
});

test('renders form fields and button', () => {
  render(<Contact />);
  
  const emailInput = screen.getByPlaceholderText('Email');
  const messageTextarea = screen.getByPlaceholderText('Message');
  const submitButton = screen.getByText('Send Message');

  expect(emailInput).toBeInTheDocument();
  expect(messageTextarea).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});