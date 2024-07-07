import { describe, it, expect, vi } from "vitest";
import { generateToken } from "./app";

describe("generateToken()", () => {
  it("should execute the logger function if passed", () => {
    // generateToken(() => {

    // });

    const logger = vi.fn();
    logger.mockImplementationOnce(() => {});
    generateToken(logger);

    expect(logger).toBeCalled();
  });
});
