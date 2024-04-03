const m = require('./main');

test('Getting first letter', () => {
  expect(m.specific_letter("Hello", 0)).toBe("H");
});

test('Bad letter 1', () => {
  expect(m.specific_letter("Hello", -4)).toBe(-1);
});

test('Bad letter 2', () => {
  expect(m.specific_letter("Hello", 10)).toBe(-1);
});

test('Getting last letter', () => {
  expect(m.specific_letter("Hello", 4)).toBe("o");
});