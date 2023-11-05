import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import '@testing-library/jest-dom';
import Hero from '../components/Hero/Hero';

jest.mock('../components/CardCar/CardCar', () => function DummyCardCar() {
  return <div>CardCar Component</div>;
});

const mockStore = configureMockStore();
const store = mockStore({
  car: {
    cars: [],
  },
});

describe('Hero Component', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve([]),
      ok: true,
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders car cards', async () => {
    render(
      <Provider store={store}>
        <Router>
          <Hero />
        </Router>
      </Provider>,
    );

    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1));
  });
});
