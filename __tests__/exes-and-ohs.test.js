const { XO } = require('../src/7kyu-exes-and-ohs');

test('sample tests from Codewars', () => {
  expect(XO('xo')).toBe(true);
  expect(XO('XO')).toBe(true);
  expect(XO('xxxoo')).toBe(false);
  expect(XO('xxOo')).toBe(true);
  expect(XO('')).toBe(true); 
});
