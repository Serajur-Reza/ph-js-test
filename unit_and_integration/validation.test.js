import { expect, it, describe } from "vitest";
import { validateArrayNotEmpty, validateEmail } from "./validation";

describe("validateEmail()", () => {
  it("should validate a correct email address", () => {
    const email = "radio@active.com";
    const result = () => validateEmail(email);
    expect(result).not.toThrow();
  });

  it("should throw error for an invalid email address", () => {
    const email = "radio";
    const result = () => validateEmail(email);
    expect(result).toThrow();
  });

  it("should throw error for an empty email address", () => {
    const email = "";
    const result = () => validateEmail(email);
    expect(result).toThrow();
  });
});

describe("validateArrayNotEmpty()", () => {
  it("should validate a non-empty array", () => {
    const arr = [2, 5];
    const result = () => validateArrayNotEmpty(arr);
    expect(result).not.toThrow();
  });

  it("should throw error for an empty array", () => {
    const arr = [];
    const result = () => validateArrayNotEmpty(arr);
    expect(result).toThrow();
  });

  it("should throw error for a non-array input", () => {
    const arr = 2;
    const result = () => validateArrayNotEmpty(arr);
    expect(result).toThrow();
  });

  it("should throw error for a null input", () => {
    const arr = null;
    const result = () => validateArrayNotEmpty(arr);
    expect(result).toThrow();
  });

  it("should throw error for a undefined input", () => {
    const arr = undefined;
    const result = () => validateArrayNotEmpty(arr);
    expect(result).toThrow();
  });
});
