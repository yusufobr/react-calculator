import { fireEvent, render, screen } from '@testing-library/react';
import Calculator from '../Calculator';
import operate from '../../logic/operate';

describe('operate', () => {
  describe('add', () => {
    test('should add two numbers correctly', () => {
      expect(operate(2, 2, '+')).toMatchSnapshot();
      expect(operate(5, 5, '+')).toMatchSnapshot();
    });
  });

  describe('subtract', () => {
    test('should subtract two numbers correctly', () => {
      expect(operate(5, 3, '-')).toMatchSnapshot();
      expect(operate(1, 1, '-')).toMatchSnapshot();
    });
  });

  describe('multiply', () => {
    test('should multiply two numbers correctly', () => {
      expect(operate(5, 3, 'x')).toMatchSnapshot();
      expect(operate(2, 1, 'x')).toMatchSnapshot();
    });
  });

  describe('divide', () => {
    test('should divide two numbers correctly', () => {
      expect(operate(5, 5, '÷')).toMatchSnapshot();
      expect(operate(10, 5, '÷')).toMatchSnapshot();
      expect(operate(5, 0, '÷')).toMatchSnapshot();
    });
  });

  describe('modulo', () => {
    test('should find modulo of two positive numbers correctly', () => {
      expect(operate(10, 3, '%')).toMatchSnapshot();
      expect(operate(15, 7, '%')).toMatchSnapshot();
      expect(operate(5, 0, '÷')).toEqual("Can't divide by 0.");
    });
  });

  describe('unknown operation', () => {
    test('should throw an error for unknown operation', () => {
      expect(() => operate(5, 3, '$')).toThrow("Unknown operation '$'");
      expect(() => operate(10, 5, '@')).toThrow("Unknown operation '@'");
    });
  });
});

describe('Button component', () => {
  test('should update the state when clicked', () => {
    render(<Calculator />);

    const buttonElements = screen.getAllByRole('button');
    const acButton = buttonElements.find((button) => button.value === 'AC');
    fireEvent.click(acButton);

    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toHaveValue('0');
  });
});
