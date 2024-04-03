const m = require('./main');

test('Pythag Simple', () => {
  expect(m.pythag(3, 4)).toBe(5);
});

test('Pythag not so simple', () => {
  expect(m.pythag(13, 34)).toBe(36.40055);
});
