import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import CarDetails from '../components/CarDetails/CarDetails'; // Adjust the import path as necessary

describe('CarDetails Component', () => {
  it('renders car details', () => {
    const carMock = {
      id: 1,
      name: 'Test Car',
      description: 'This is a test car',
      image_url: 'test_car.png',
      finance_fee: 100,
      option_to_purchase_fee: 50,
      total_amount_payable: 15000,
      duration: 12,
    };

    render(
      <Router>
        <CarDetails car={carMock} />
      </Router>
    );

    expect(screen.getByText(carMock.name)).toBeInTheDocument();
    expect(screen.getByAltText(carMock.name)).toHaveAttribute('src', carMock.image_url);
  });

  it('does not render car details without car prop', () => {
    render(
      <Router>
        <CarDetails />
      </Router>
    );

    expect(screen.queryByText('Test Car')).not.toBeInTheDocument();
    expect(screen.queryByAltText('Test Car')).not.toBeInTheDocument();
  });
});
