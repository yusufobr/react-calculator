import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../Home';

describe('Test for the Home Component', () => {
  test('renders Home component correctly', () => {
    render(<Home />);

    const titleElement = screen.getByText('Math Magician :');
    expect(titleElement).toBeInTheDocument();

    const paragraphElements = screen.getAllByText((content, element) => element.tagName.toLowerCase() === 'p');
    expect(paragraphElements).toHaveLength(3);
  });
});
