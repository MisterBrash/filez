const m = require('./main');

test('School starts at...', () => {
  expect(m.military_to_standard(8, 30)).toBe("8:30 AM");
});

test('Lunch is at...', () => {
  expect(m.military_to_standard(11, 15)).toBe("11:15 AM");
});

test('Period 3 ends at...', () => {
  expect(m.military_to_standard(13, 23)).toBe("1:23 PM");
});

test('Mr. Squirrel\'s bedtime...', () => {
  expect(m.military_to_standard(22, 5)).toBe("10:05 PM");
});

test('Most students stay up past...', () => {
  expect(m.military_to_standard(23, 59)).toBe("11:59 PM");
});

test('The cow jumps over the moon...', () => {
  expect(m.military_to_standard(0, 48)).toBe("12:48 AM");
});