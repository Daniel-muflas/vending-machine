import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { Wallet } from '../../components/Wallet';
import { store } from '../../store';
import { Provider } from 'react-redux';


describe("Wallet Component", () => {

  test('renders Wallet component with initial values', () => {
    const name = 'John';
    const lastName = 'Doe';
    const totalValue = 100;

    const { getByText } = render(
      <Provider store={store}>
        <Wallet name={name} lastName={lastName} totalValue={totalValue} />
      </Provider>
    );

    expect(getByText(`User name: ${name} ${lastName}`)).toBeInTheDocument();
    expect(getByText(`Balance: 0€`)).toBeInTheDocument();
    expect(getByText('Buy')).toBeInTheDocument();
    expect(getByText('Refound money')).toBeInTheDocument();
  });
});

describe ("Save money", () => {
  test('updates total balance when "Save money" button is clicked', async () => {
    const name = 'John';
    const lastName = 'Doe';
    const totalValue = 100;
  
    const { getByText } = render(
      <Provider store={store}>
        <Wallet name={name} lastName={lastName} totalValue={totalValue} />
      </Provider>
    );
  
    expect(getByText('Balance: 0€')).toBeInTheDocument();
  
    fireEvent.click(getByText('Save money'));
  
    await waitFor(() => {
      expect(getByText('Balance: 0€')).toBeInTheDocument();
    });
  
    expect(getByText('Balance: 50€')).toBeInTheDocument();
  });
  
});


describe("Buy ", () => {
  test('disables "Buy" button when there is not enough money', async () => {
    
    const name = 'John';
    const lastName = 'Doe';
    const totalValue = 100;
  
    const { getByText } = render(
      <Provider store={store}>
        <Wallet name={name} lastName={lastName} totalValue={totalValue} />
      </Provider>
    );

    const buyButton = getByText('Buy');
    expect(buyButton).toBeEnabled();
  
    await waitFor(() => {
      expect(buyButton).toBeDisabled(); 
    });
  
    expect(buyButton).toBeEnabled();
  });
  
});