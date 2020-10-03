// We import (require) the function that we want to test.
const addNumbers = require("../exercise-5");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 5", () => {
  expect(addNumbers(1, 2, 3, 4, 5)).toBe(55);
  // add more tests here...
  expect(addNumbers(2, 3, 4, 5)).toBe(54);
  expect(addNumbers(2, 2, 3, 3, 5)).toBe(51);
  expect(addNumbers(1, 1, 4, 4, 5)).toBe(59);
  expect(addNumbers(1, 4, 4, 5, 5)).toBe(83);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
