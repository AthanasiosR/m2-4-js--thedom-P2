// We import (require) the function that we want to test.
const redacted = require("../exercise-2");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 2", () => {
  expect(redacted(["bacon", false, 42])).toStrictEqual(["redacted", false, 42]);
  // add more tests here...
  expect(redacted(["Tommy", true, 25])).toStrictEqual(["redacted", false, 42]);
  expect(redacted(["desk", "bruce", 5])).toStrictEqual([
    "redacted",
    "redacted",
    5,
  ]);
  expect(redacted(["computer", false, "tablet"])).toStrictEqual([
    "redacted",
    false,
    "redacted",
  ]);
  expect(redacted([25, "phone", 7])).toStrictEqual([25, "redacted", 7]);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
