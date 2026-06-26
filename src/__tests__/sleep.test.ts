import { describe, it, expect } from "vitest";
import { sleep } from "../sleep";

describe("sleep", () => {
  it("should be a function", () => {
    expect(typeof sleep).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => sleep(null as any)).toThrow();
  });
});
