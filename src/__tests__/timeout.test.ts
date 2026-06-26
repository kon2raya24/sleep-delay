import { describe, it, expect } from "vitest";
import { timeout } from "../timeout";

describe("timeout", () => {
  it("should be a function", () => {
    expect(typeof timeout).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => timeout(null as any)).toThrow();
  });
});
