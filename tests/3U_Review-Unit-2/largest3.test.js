const m = require('./main');

test('Largest of 3 (1)', () => {
  expect(m.largest_of_3(1, 0, 4)).toBe(4);
});

test('Largest of 3 (2)', () => {
  expect(m.largest_of_3(5, 5, 5)).toBe(5);
});

test('Largest of 3 (3)', () => {
  expect(m.largest_of_3(11, 4, 4)).toBe(11);
});

test('Largest of 3 (4)', () => {
  expect(m.largest_of_3(3, 10, 4)).toBe(10);
});

test('Largest of 3 (5)', () => {
  expect(m.largest_of_3(4, 0, 4)).toBe(4);
});