import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Main from '../components/Main/Main';

jest.mock('../components/Sidebar/Sidebar', () => function DummySidebar() {
  return <div data-testid="sidebar">Sidebar Component</div>;
});

jest.mock('../components/Hero/Hero', () => function DummyHero() {
  return <div data-testid="hero">Hero Component</div>;
});

jest.mock('../components/Sidebar/SidebarNav', () => function DummySidebarNav() {
  return <div data-testid="sidebarnav">SidebarNav Component</div>;
});

describe('Main Component', () => {
  it('renders the main layout with sidebar, sidebar navigation, and hero section', () => {
    render(<Main />);

    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    expect(screen.getByTestId('hero')).toBeInTheDocument();
    expect(screen.getByTestId('sidebarnav')).toBeInTheDocument();
  });
});
