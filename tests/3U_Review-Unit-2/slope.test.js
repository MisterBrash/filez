const m = require('./main');

test('Slope 1', () => {
  expect(m.slope(5, 6, 7, 8)).toBe(1);
});

test('Slope 2', () => {
  expect(m.slope(5, 6, -7, 8)).toBe(-0.2);
});