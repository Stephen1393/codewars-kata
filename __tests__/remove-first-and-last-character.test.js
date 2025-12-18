const { removeChar } = require('../src/8kyu-remove-first-and-last-character');


test('removes first and last character from "eloquent"', () => {
  expect(removeChar("eloquent")).toBe("loquen");
});

test('removes first and last character from "country"', () => {
    expect(removeChar("country")).toBe("ountr");
});

test('removes first and last character from "ooopsss"', () => {
    expect(removeChar("ooopsss")).toBe("oopss");
});

test('removes first and last character from "ab"', () => {
    expect(removeChar("ab")).toBe("");
});

test('removes first and last character from "abc"', () => {
    expect(removeChar("abc")).toBe("b");
});

