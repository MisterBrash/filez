const m = require('./main');

test('Distance 1', () => {
  expect(m.distance(5, 6, 7, 8)).toBe(2.8);
});

test('Distance 2', () => {
  expect(m.distance(-5, -6, 7, 8)).toBe(18.4);
});

test('Distance 3', () => {
  expect(m.distance(15, 16, 7, 8)).toBe(11.3);
});