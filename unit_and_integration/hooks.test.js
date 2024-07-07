import { beforeEach, expect, it } from "vitest";
import { User } from "./hooks";

const testEmail = "test@test.com";

let user;
beforeEach(() => {
  user = new User(testEmail);
});

it("should have an email property", () => {
  expect(user).toHaveProperty("email");
});

it("should store an email value", () => {
  expect(user.email).toBe(testEmail);
});

it("should have an email property", () => {
  const newTestEmail = "test2@test.com";

  user.updateEmail(newTestEmail);
  expect(user.email).toBe(newTestEmail);
});

it("should have an email property after clearing the email", () => {
  user.clearEmail();
  expect(user).toHaveProperty("email");
});
