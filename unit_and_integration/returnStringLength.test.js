import { expect, it } from "vitest";
import { returnStringLength } from "./returnStringLength";

it("should return the string length", () => {
  const result = returnStringLength("Radiactive");

  expect(result).toBeTypeOf("number");
  expect(result).toBeTruthy;
});

it("should return correct length of non-empty string", () => {
  expect(returnStringLength("hello")).toBe(5);
  expect(returnStringLength("world")).toBe(5);
  expect(returnStringLength("hello world")).toBe(11);
});

it("should return 0 for empty string", () => {
  expect(returnStringLength("")).toBe(0);
});

it("should throw error for non-string input", () => {
  expect(returnStringLength(123)).toBeUndefined();
  expect(() => returnStringLength(null)).toThrow();
  expect(() => returnStringLength(undefined)).toThrow();
});
