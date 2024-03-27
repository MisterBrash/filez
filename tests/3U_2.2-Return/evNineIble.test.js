/* Tests for evNineIble(value) */

const w = require('./tasks_lesson_2');

test('Does 9 work?', () => {
  expect(w.evNineIble(9)).toBe(false);
});

test('Does 36 work?', () => {
  expect(w.evNineIble(36)).toBe(true);
});

test('Does 54 work?', () => {
  expect(w.evNineIble(54)).toBe(true);
});

test('Does 80 work?', () => {
  expect(w.evNineIble(80)).toBe(false);
});
