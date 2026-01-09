import { describe, expect, it } from "vitest";
import { createSharedRefinements } from "./index";
import type { Table } from "drizzle-orm";

describe("createSharedRefinements", () => {
  it("should be a function", () => {
    expect(typeof createSharedRefinements).toBe("function");
  });

  it("should return the second parameter", () => {
    const mockTable = {} as Table;
    const refinements = {};
    const output = createSharedRefinements(mockTable, refinements);
    expect(output).toBe(refinements);
  });
});
