const sum = require("./index");

test("Adding valueA + valueB", () => {
  expect(sum(valueA, valueB)).toBe(valueA + valueB);
});
