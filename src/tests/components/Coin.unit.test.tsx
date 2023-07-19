import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { CoinsProp, Coins } from "../../components/Coin";

const mockIncrementBalance = jest.fn();

const mockProps: CoinsProp = {
  value: 10,
  incrementBalance: mockIncrementBalance,
};

describe("Coins Component", () => {
  it("renders without crashing", () => {
    render(<Coins {...mockProps} />);
    const coinsElement = screen.getByText("10 €");
    expect(coinsElement).toBeInTheDocument();
  });

  it("displays the correct value", () => {
    render(<Coins {...mockProps} />);
    const coinsElement = screen.getByText("10 €");
    expect(coinsElement).toBeInTheDocument();
  });

  it("calls incrementBalance with the correct value when clicked", () => {
    render(<Coins {...mockProps} />);
    const coinsButton = screen.getByText("10 €");
    fireEvent.click(coinsButton);
    expect(mockIncrementBalance).toHaveBeenCalledWith(10);
  });
});
