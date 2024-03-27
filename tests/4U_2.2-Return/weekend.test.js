/* Tests for is_it_the_weekend(day) */

const w = require('./tasks_lesson_2');

test('Is Monday a weekend?', () => {
  expect(w.is_it_the_weekend(2)).toBe(false);
});

test('Is Sunday a weekend?', () => {
  expect(w.is_it_the_weekend(1)).toBe(true);
});

test('Is Saturday a weekend?', () => {
  expect(w.is_it_the_weekend(7)).toBe(true);
});

test('Is Thursday a weekend?', () => {
  expect(w.is_it_the_weekend(5)).toBe(false);
});
