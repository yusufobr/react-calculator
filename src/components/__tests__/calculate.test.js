import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import calculate from '../../logic/calculate';
import Calculator from '../Calculator';

describe('calculate', () => {
  test('returns an empty object when buttonName is "AC"', () => {
    const result = calculate({}, 'AC');
    expect(result).toMatchSnapshot();
  });

  test('updates "next" with a number when no operation is set', () => {
    const obj = { next: '5', total: null, operation: null };
    const result = calculate(obj, '2');
    expect(result).toMatchSnapshot();
  });

  test('appends a number to "next" when an operation is set', () => {
    const obj = { next: '5', total: null, operation: '+' };
    const result = calculate(obj, '2');
    expect(result).toMatchSnapshot();
  });

  test('performs the operation when "next" and an operation are set', () => {
    const obj = { next: '5', total: '10', operation: 'x' };
    const result = calculate(obj, '=');
    expect(result).toMatchSnapshot();
  });
});

describe('Calculator Component', () => {
  test('simulates user interaction', () => {
    const { getByText } = render(<Calculator />);

    const button1 = getByText('1');
    fireEvent.click(button1);

    const buttonPlus = getByText('+');
    fireEvent.click(buttonPlus);

    const button5 = getByText('5');
    fireEvent.click(button5);

    const buttonEqual = getByText('=');
    fireEvent.click(buttonEqual);

    const result = getByText('6');

    expect(result).toBeInTheDocument();
  });
});
