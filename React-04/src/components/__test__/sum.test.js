import { sum } from "../sum";

test("Sum function should calculate sum of 2 numbers", () => {
  const result = sum(3, 4);

  // Assertion
  expect(result).toBe(7);
});
