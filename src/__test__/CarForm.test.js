import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import '@testing-library/jest-dom';
import CarForm from '../components/CarForm/CarForm';

const mockStore = configureMockStore();
const store = mockStore({});

describe('CarForm Component', () => {
  it('renders form inputs and submit button', () => {
    render(
      <Provider store={store}>
        <Router>
          <CarForm />
        </Router>
      </Provider>
    );

    expect(screen.getByLabelText(/name:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/description:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/deposit:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/finance fee:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/option to purchase fee:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/total amount payable:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/duration:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/image:/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /create car/i })).toBeInTheDocument();
  });
});
