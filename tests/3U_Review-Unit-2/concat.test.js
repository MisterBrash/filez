const m = require('./main');

test('Simple concat', () => {
  expect(m.concat("Hello", " world")).toBe("Hello world");
});

test('Tricky concat', () => {
  expect(m.concat("", "Squirrel")).toBe("Squirrel");
});

test('Tricky concat 2', () => {
  expect(m.concat(" ", " ")).toBe("  ");
});