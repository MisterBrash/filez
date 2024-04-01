/* Tests for the area_cylinder(r, h) function */

const w = require('./tasks_lesson_2');

function round(v, d) {
  return Math.round(v * 10**d)/10**d;
}

function ac(r, h) {
  return 2*Math.PI*r**2 + 2*Math.PI*r*h;
}

test('Radius 5, Height 9', () => {
  let c = round(ac(5, 9), 4)
  expect(round(w.area_cylinder(5, 9), 4)).toBe(c);
});

test('Radius 1, Height 1', () => {
  let c = round(ac(1, 1), 4)
  expect(round(w.area_cylinder(1, 1), 4)).toBe(c);
});

test('Radius 9, Height 5', () => {
  let c = round(ac(9, 5), 4)
  expect(round(w.area_cylinder(9, 5), 4)).toBe(c);
});

test('Radius 6.123, Height 14.876', () => {
  let c = round(ac(6.123, 14.876), 4)
  expect(round(w.area_cylinder(6.123, 14.876), 4)).toBe(c);
});
