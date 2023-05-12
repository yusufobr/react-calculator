import React from 'react';
import { render, screen } from '@testing-library/react';
import Quote from '../Quote';

describe('Test for the Quote Component', () => {
  test('renders Quote component correctly', () => {
    render(<Quote />);

    const titleElement = screen.getByText('Quote of the day :');
    expect(titleElement).toBeInTheDocument();

    const quoteElement = screen.getByTestId('the-quote');
    expect(quoteElement).toBeInTheDocument();
  });
});
