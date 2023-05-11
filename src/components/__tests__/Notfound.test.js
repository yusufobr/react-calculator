import React from 'react';
import { render, screen } from '@testing-library/react';
import Notfound from '../Notfound';

describe('Test for the Home Component', () => {
  test('renders Home component correctly', () => {
    render(<Notfound />);

    const titleElement = screen.getByText('404!');
    expect(titleElement).toBeInTheDocument();

    const paragraphElement = screen.getByText('Content Not Found');
    expect(paragraphElement).toBeInTheDocument();
  });
});
