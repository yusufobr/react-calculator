import operate from '../../logic/operate';

describe('add', () => {
  test('adds two numbers correctly', () => {
    expect(operate(2, 2, '+')).toMatchSnapshot();
    expect(operate(5, 5, '+')).toMatchSnapshot();
  });
});

describe('subtract', () => {
  test('subtracts two numbers correctly', () => {
    expect(operate(5, 3, '-')).toMatchSnapshot();
    expect(operate(1, 1, '-')).toMatchSnapshot();
  });
});

describe('multiply', () => {
  test('multiply two numbers correctly', () => {
    expect(operate(5, 3, 'x')).toMatchSnapshot();
    expect(operate(2, 1, 'x')).toMatchSnapshot();
  });
});

describe('divide', () => {
  test('divide two numbers correctly', () => {
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
  it('should throw an error for unknown operation', () => {
    expect(() => operate(5, 3, '$')).toThrow("Unknown operation '$'");
    expect(() => operate(10, 5, '@')).toThrow("Unknown operation '@'");
  });
});
