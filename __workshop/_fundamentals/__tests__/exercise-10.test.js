// We import (require) the function that we want to test.
const uniqueElements = require("../exercise-10");

// Write 3 more expect functions to test the function you just wrote.
// Notice that the expect method is different.
// When verifying equality of arrays and objects, we need to use .toStrictEqual().
test("Exercise 10", () => {
  expect(uniqueElements([0, 1, 2, 3], [1, 3, 4, 5])).toStrictEqual([
    0,
    2,
    4,
    5,
  ]);
  // add more tests here...

  expect(uniqueElements([0, 10, 20, 30], [10, 30, 40, 50])).toStrictEqual([
    0,
    20,
    40,
    50,
  ]);
  expect(uniqueElements([0, 31, 21, 33], [0, 10, 21, 31])).toStrictEqual([
    33,
    10,
  ]);
  expect(uniqueElements([5, 15, 25, 35], [15, 35, 45, 55])).toStrictEqual([
    5,
    25,
    45,
    55,
  ]);
  expect(uniqueElements([10, 11, 12, 13], [11, 13, 14, 15])).toStrictEqual([
    10,
    12,
    14,
    15,
  ]);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
