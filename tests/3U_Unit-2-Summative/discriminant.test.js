const m = require('./main');

test('Should be no real solutions', () => {
  expect(m.discriminant(5, 6, 7)).toBe(0);
});

test('Should be one real root', () => {
  expect(m.discriminant(7, -14, 7)).toBe(1);
});

test('Should be no real solutions', () => {
  expect(m.discriminant(-15, 10, -4)).toBe(0);
});

test('Should have two real solutions', () => {
  expect(m.discriminant(15, 10, -4)).toBe(2);
});