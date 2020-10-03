// We import (require) the function that we want to test.
const insert = require("../exercise-3");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 3", () => {
  expect(
    insert([{ name: "Bob" }, { name: "Josie" }], { isAvailable: false })
  ).toStrictEqual([
    { name: "Bob", isAvailable: false },
    { name: "Josie", isAvailable: false },
  ]);
  // add more tests here...
  expect(
    insert([{ name: "Tom" }, { name: "Sam" }], { isAvailable: false })
  ).toStrictEqual([
    { name: "Tom", isAvailable: false },
    { name: "Sam", isAvailable: false },
  ]);

  expect(
    insert([{ name: "Louie" }, { name: "Bruce" }], { isAvailable: true })
  ).toStrictEqual([
    { name: "Louie", isAvailable: true },
    { name: "Bruce", isAvailable: true },
  ]);

  expect(
    insert([{ name: "Kathy" }, { name: "Drossie" }], { isAvailable: false })
  ).toStrictEqual([
    { name: "Kathy", isAvailable: false },
    { name: "Drossie", isAvailable: false },
  ]);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
