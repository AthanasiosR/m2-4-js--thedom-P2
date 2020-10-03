// We import (require) the function that we want to test.
const count = require("../exercise-4");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 4", () => {
  expect(
    count(
      [
        { name: "Bob", amount: 100 },
        { name: "Josie", amount: 45 },
      ],
      "amount"
    )
  ).toBe(145);
  // add more tests here...
  expect(
    count(
      [
        { name: "Tom", amount: 200 },
        { name: "Louie", amount: 75 },
      ],
      "amount"
    )
  ).toBe(275);
});
expect(
  count(
    [
      { name: "Drossie", amount: 250 },
      { name: "Kathy", amount: 175 },
    ],
    "amount"
  )
).toBe(425);
expect(
  count(
    [
      { name: "Sam", amount: 50 },
      { name: "Bruce", amount: 150 },
    ],
    "amount"
  )
).toBe(200);

// More info on jest expect: https://jestjs.io/docs/en/expect
