const stringLength = require('./stringLength');

test('length of the string = 21', () => {
  expect(stringLength('This is my first test')).toBe('The length of the string is no more than 10');
});

test('No string', () => {
    expect(stringLength('')).toBe('Error no string');
  });

  test('No string', () => {
    expect(stringLength(' ')).toBe('Error no string');
  });

  test('The length of the string is 10 or less than 10', () => {
    expect(stringLength('abcdefghij')).toBe(10);
  });