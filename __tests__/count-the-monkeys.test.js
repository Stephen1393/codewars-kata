
const { monkeyCount } = require('../src/8kyu-count-the-monkeys');

test('monkeyCount returns [1..n]', () => {
  expect(monkeyCount(5)).toEqual([1, 2, 3, 4, 5]);
});