import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import ReservationList from '../components/ReservationList/ReservationList';

const mockStore = configureMockStore();
const store = mockStore({
  reservation: {
    reservations: [],
    loading: false,
    error: null,
  },
});

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: '123',
  }),
  useNavigate: () => jest.fn(),
}));

describe('ReservationList Component', () => {
  beforeEach(() => {
    useSelector.mockImplementation((callback) =>
      callback({
        reservation: {
          reservations: [],
          loading: false,
          error: null,
        },
      }),
    );
  });

  afterEach(() => {
    useSelector.mockClear();
  });

  it('renders reservation list', () => {
    render(
      <Provider store={store}>
        <Router>
          <ReservationList />
        </Router>
      </Provider>
    );

    expect(screen.getByText(/Your Reservations/i)).toBeInTheDocument();
    expect(screen.getByText(/You dont have reservations yet/i)).toBeInTheDocument();
  });
});
