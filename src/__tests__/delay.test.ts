import { describe, it, expect } from "vitest";
import { delay } from "../delay";

describe("delay", () => {
  it("should be a function", () => {
    expect(typeof delay).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => delay(null as any)).toThrow();
  });
});
