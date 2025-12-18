const { getCount } = require('../src/7kyu-vowel-count');

test("returns 5 for 'abracadabra'", () => {
  expect(getCount("abracadabra")).toBe(5);
});