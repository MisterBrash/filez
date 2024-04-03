/* Tests for main.js */

// specific_letter, concat, contains_uppercase, delta, slope, pythag, area_rectangle, area_rect_prism, distance, largest_of_2, largest_of_3

const m = require('./main');

test('Simple concat', () => {
  expect(m.concat("Hello", " world").toBe("Hello world");
});

test('Tricky concat', () => {
  expect(m.concat("", "Squirrel").toBe("Squirrel");
});

test('Tricky concat 2', () => {
  expect(m.specific_letter(" ", " ").toBe("  ");
});

test('Delta 1', () => {
  expect(m.delta(5, 6).toBe(-1);
});

test('Delta 2', () => {
  expect(m.delta(5, 5).toBe(0);
});

test('Delta 3', () => {
  expect(m.delta(-5, 6).toBe(-11);
});

test('Pythag Simple', () => {
  expect(m.pythag(3, 4).toBe(5);
});

test('Pythag not so simple', () => {
  expect(m.pythag(13, 34).toBe(36.4);
});

test('Area Rectangle 1', () => {
  expect(m.area_rectangle(1, 4).toBe(4);
});

test('Area Rectangle 2', () => {
  expect(m.area_rectangle(13, 5).toBe(65);
});

test('Area Rectangle Prism 1', () => {
  expect(m.area_rect_prism(5, 6, 7).toBe(214);
});

test('Area Rectangle Prism 2', () => {
  expect(m.area_rect_prism(17, 66, 107).toBe(20006);
});

test('Slope 1', () => {
  expect(m.slope(5, 6, 7, 8).toBe(1);
});

test('Slope 2', () => {
  expect(m.slope(5, 6, -7, 8).toBe(0.2);
});

test('Distance 1', () => {
  expect(m.distance(5, 6, 7, 8).toBe(2.8);
});

test('Distance 2', () => {
  expect(m.distance(-5, -6, 7, 8).toBe(18.4);
});

test('Distance 3', () => {
  expect(m.distance(15, 16, 7, 8).toBe(11.3);
});

test('Getting first letter', () => {
  expect(m.specific_letter("Hello", 0).toBe("H");
});

test('Bad letter 1', () => {
  expect(m.specific_letter("Hello", -4).toBe(-1);
});

test('Bad letter 2', () => {
  expect(m.specific_letter("Hello", 10).toBe(-1);
});

test('Getting last letter', () => {
  expect(m.specific_letter("Hello", 4).toBe("o");
});

test('Contains an uppercase letter', () => {
  expect(m.contains_uppercase("heLlo").toBe(true);
});

test('Does not contain an uppercase letter', () => {
  expect(m.contains_uppercase("hello").toBe(false);
});

test('Largest of 2 (1)', () => {
  expect(m.largest_of_2(1, 0).toBe(1);
});

test('Largest of 2 (2)', () => {
  expect(m.largest_of_2(100, 100).toBe(100);
});

test('Largest of 2 (3)', () => {
  expect(m.largest_of_2(7, 10).toBe(10);
});

test('Largest of 3 (1)', () => {
  expect(m.largest_of_3(1, 0, 4).toBe(4);
});

test('Largest of 3 (2)', () => {
  expect(m.largest_of_3(5, 5, 5).toBe(5);
});

test('Largest of 3 (3)', () => {
  expect(m.largest_of_3(11, 4, 4).toBe(11);
});

test('Largest of 3 (4)', () => {
  expect(m.largest_of_3(3, 10, 4).toBe(10);
});

test('Largest of 3 (5)', () => {
  expect(m.largest_of_3(4, 0, 4).toBe(4);
});
