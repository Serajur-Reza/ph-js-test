import { it, expect } from "vitest";
import { add } from "./math";

it("should return the correct sum if an array of number is provided", () => {
  //arrange
  const numbers = [1, 2, 3];

  const expectedResult = numbers.reduce((acc, curr) => acc + curr);

  //actions
  const result = add(numbers);

  //assertion
  expect(result).toBe(expectedResult);
});

it("should provide NAN if at least one invalid number is provided", () => {
  //arrange
  const numbers = [1, "invalid", 3];

  //   const expectedResult = numbers.reduce((acc, curr) => acc + curr);

  //actions
  const result = add(numbers);

  //assertion
  expect(result).toBeNaN();
});

it("should provide the correct sum if an array numeric string is provided", () => {
  //arrange
  const numbers = ["1", "2", "3"];

  const expectedResult = numbers.reduce((acc, curr) => +acc + +curr);

  //actions
  const result = add(numbers);

  //assertion
  expect(result).toBe(expectedResult);
});

it("should throw an error if no argument is provided", () => {
  const result = () => {
    add();
  };

  expect(result).toThrow();
});

it("should throw an error if multiple argument is provided", () => {
  const result = () => {
    add(1, 2, 3);
  };

  expect(result).toThrow(/is not iterable/);
});
