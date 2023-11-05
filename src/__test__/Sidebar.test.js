import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Sidebar from '../components/Sidebar/Sidebar';

const mockStore = configureMockStore();
const store = mockStore({});

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => jest.fn()
}));

describe('Sidebar Component', () => {
  it('renders without crashing', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Sidebar />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByLabelText('Reserve Model')).toBeInTheDocument();
    expect(screen.getByLabelText('My Reservations')).toBeInTheDocument();
    expect(screen.getByLabelText('Add Car')).toBeInTheDocument();
    expect(screen.getByLabelText('Delete Car')).toBeInTheDocument();
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument();
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument();
    expect(screen.getByLabelText('Google')).toBeInTheDocument();
    expect(screen.getByLabelText('Vimeo')).toBeInTheDocument();
    expect(screen.getByLabelText('Pinterest')).toBeInTheDocument();
  });
});
