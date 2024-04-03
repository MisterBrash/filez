const m = require('./main');

test('Area Rectangle 1', () => {
  expect(m.area_rectangle(1, 4)).toBe(4);
});

test('Area Rectangle 2', () => {
  expect(m.area_rectangle(13, 5)).toBe(65);
});

test('Area Rectangle Prism 1', () => {
  expect(m.area_rect_prism(5, 6, 7)).toBe(214);
});

test('Area Rectangle Prism 2', () => {
  expect(m.area_rect_prism(17, 66, 107)).toBe(20006);
});