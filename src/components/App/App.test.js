import '@testing-library/jest-dom';

import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

test('App has 6 products on initial', () => {
  render(<App />);

  const productItems = screen.getAllByTestId('product-list-item');
  expect(productItems.length).toBe(6);
});

test('App has 3 products with books category', () => {
  render(<App />);

  expect(screen.getAllByTestId('product-list-item').length).toBe(6);

  fireEvent.click(screen.getByLabelText(/books/i));

  expect(screen.getAllByTestId('product-list-item').length).toBe(3);

  fireEvent.click(screen.getByLabelText(/books/i));

  expect(screen.getAllByTestId('product-list-item').length).toBe(6);
});

test('App has 2 products with 50 discount', () => {
  const { container, getAllByTestId } = render(<App />);

  expect(getAllByTestId('product-list-item').length).toBe(6);

  const discountInput = container.querySelector('input[name="discount"]');

  const mockEvent = {
    target: {
      value: '50'
    }
  };

  fireEvent.change(discountInput, mockEvent);

  expect(getAllByTestId('product-list-item').length).toBe(2);
});
