const stringReverse = require('./stringReverse');

test('Reverse the string', () => {
  expect(stringReverse('This is my first test')).toBe('tset tsrif ym si sihT');
});

test('Reverse the string', () => {
  expect(stringReverse('Hello')).toBe('olleH');
});