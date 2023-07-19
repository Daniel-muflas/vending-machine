import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For additional matchers like "toBeInTheDocument"
import { Product } from '../../components/Product';

// Mock the functions passed as props
const mockDecrementStock = jest.fn();
const mockIncrementValue = jest.fn();
const mockAddItem = jest.fn();

const testProductProps = {
  id: 'test-id',
  title: 'Test Product',
  stock: 10,
  price: 19.99,
  decrementStock: mockDecrementStock,
  incrementValue: mockIncrementValue,
  addItem: mockAddItem,
};

test('Product component renders correctly', () => {
  render(<Product {...testProductProps} />);

  // Assert that the product details are displayed
  expect(screen.getByText(testProductProps.title)).toBeInTheDocument();
  expect(screen.getByText(`Stock : ${testProductProps.stock}`)).toBeInTheDocument();
  expect(screen.getByText(`Price: ${testProductProps.price}€`)).toBeInTheDocument();

  // Assert that the "Add" button is present
  const addButton = screen.getByText('Add');
  expect(addButton).toBeInTheDocument();

  // Simulate clicking the "Add" button
  fireEvent.click(addButton);

  // Assert that the mock functions are called with the correct arguments
  expect(mockDecrementStock).toHaveBeenCalledWith(testProductProps.id);
  expect(mockIncrementValue).toHaveBeenCalledWith(testProductProps.id, testProductProps.price);
  expect(mockAddItem).toHaveBeenCalledWith(testProductProps.id);
});
