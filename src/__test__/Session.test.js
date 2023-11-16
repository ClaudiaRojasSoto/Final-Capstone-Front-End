import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Session from '../components/session/Session';

describe('Session Component', () => {
  it('renders the welcome message, login, and signup links', () => {
    render(
      <BrowserRouter>
        <Session />
      </BrowserRouter>,
    );

    expect(screen.getByText('Welcome!! Please Log First')).toBeInTheDocument();

    expect(screen.getByRole('link', { name: 'Login' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'SignUp' })).toHaveAttribute('href', '/signup');
  });
});
