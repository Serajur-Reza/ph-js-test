import { expect, it } from "vitest";
import { cleanNumbers } from "./numbers";

it("should return an array of integers if an array of string is provided", () => {
  const stringNumbers = ["2", "3"];

  const result = cleanNumbers(stringNumbers);

  expect(result[0]).toBeTypeOf("number");
});

it("should throw an error if integers if an array of string is provided", () => {
  const stringNumbers = ["2", "3"];

  const result = cleanNumbers(stringNumbers);

  expect(result[0]).toBeTypeOf("number");
});
