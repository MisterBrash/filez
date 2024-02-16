// Testing the round(value, decimals) function.

const round = require('./main');

test('Return the rounded value 1', () => {
  expect(round.round(3.1415926, 5)).toBe(3.14159);
});

test('Return the rounded value 2', () => {
  expect(round.round(3.1415926, 4)).toBe(3.1416);
});

test('Return the rounded value 3', () => {
  expect(round.round(3.1415926, 0)).toBe(3);
});

test('Return the rounded value 4', () => {
  expect(round.round(3.1415926, 1)).toBe(3.1);
});
