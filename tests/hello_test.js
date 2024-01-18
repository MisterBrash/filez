const hello = require('./hello');

test('outputs the correct string', () => {
  expect(hello.hello()).toBe("Hello World!");
});
