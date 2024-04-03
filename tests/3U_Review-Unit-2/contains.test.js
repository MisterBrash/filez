const m = require('./main');

test('Contains an uppercase letter', () => {
  expect(m.contains_uppercase("heLlo")).toBe(true);
});

test('Does not contain an uppercase letter', () => {
  expect(m.contains_uppercase("hello")).toBe(false);
});