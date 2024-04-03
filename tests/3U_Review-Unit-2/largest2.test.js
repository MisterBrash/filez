const m = require('./main');

test('Largest of 2 (1)', () => {
  expect(m.largest_of_2(1, 0)).toBe(1);
});

test('Largest of 2 (2)', () => {
  expect(m.largest_of_2(100, 100)).toBe(100);
});

test('Largest of 2 (3)', () => {
  expect(m.largest_of_2(7, 10)).toBe(10);
});