
const { number } = require('../src/7kyu-number-of-people-on-the-bus');

test('returns 5 for [[10,0],[3,5],[5,8]]', () => {
  const stops = [[10,0],[3,5],[5,8]];
  expect(number(stops)).toBe(5);
});