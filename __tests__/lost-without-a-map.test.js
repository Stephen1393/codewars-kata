const { maps } = require('../8kyu-lost-without-a-map');

test('maps doubles each number in the array', () => {
  expect(maps([1, 2, 3])).toEqual([2, 4, 6]);
});

test('maps works with negative and zero', () => {
  expect(maps([-1, 0, 5])).toEqual([-2, 0, 10]);
});

test('maps returns empty array when given empty array', () => {
  expect(maps([])).toEqual([]);
});