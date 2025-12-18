const { ballCollector } = require('../src/7kyu-monkey-tennis-the-aftermath');

test('returns combined weight of tennis balls from array', () => {
  const input = [58, 68, 62, 69, 58];
  const result = ballCollector(input);

  expect(result).toEqual({ weight: 116 });
});