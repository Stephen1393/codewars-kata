const { splitInParts } = require('../7kyu-split-in-parts');

test("splitInParts('supercalifragilisticexpialidocious', 3)", () => {
  expect(
    splitInParts("supercalifragilisticexpialidocious", 3)
  ).toBe("sup erc ali fra gil ist ice xpi ali doc iou s");
});

test("splitInParts('HelloKata', 1)", () => {
  expect(
    splitInParts("HelloKata", 1)
  ).toBe("H e l l o K a t a");
});

test("splitInParts('HelloKata', 9)", () => {
  expect(
    splitInParts("HelloKata", 9)
  ).toBe("HelloKata");
});