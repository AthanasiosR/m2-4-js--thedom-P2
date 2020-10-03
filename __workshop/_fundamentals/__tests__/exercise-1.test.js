// We import (require) the function that we want to test.
const convertToString = require("../exercise-1");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 1", () => {
  expect(convertToString([10, 20, 30, 40, 50])).toStrictEqual([
    "10",
    "20",
    "30",
    "40",
    "50",
  ]);
  // add more tests here...
  expect(convertToString([11, 25, 23, 44, 85])).toStrictEqual([
    "11",
    "25",
    "23",
    "44",
    "85",
  ]);
  expect(convertToString([111, 222, 333, 444, 555])).toStrictEqual([
    "111",
    "222",
    "333",
    "444",
    "555",
  ]);
  expect(convertToString([18, 82, 53, 94, 115])).toStrictEqual([
    "18",
    "82",
    "53",
    "94",
    "115",
  ]);
  expect(convertToString([81, 32, 13, 4000, 514])).toStrictEqual([
    "81",
    "32",
    "13",
    "4000",
    "514",
  ]);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
