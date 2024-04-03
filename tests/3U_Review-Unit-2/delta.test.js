const m = require('./main');

test('Delta 1', () => {
  expect(m.delta(5, 6)).toBe(-1);
});

test('Delta 2', () => {
  expect(m.delta(5, 5)).toBe(0);
});

test('Delta 3', () => {
  expect(m.delta(-5, 6)).toBe(-11);
});