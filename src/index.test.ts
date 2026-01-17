import { sql } from "drizzle-orm";
import { index } from "drizzle-orm/pg-core";
import { timestamp, uuid, varchar } from "drizzle-orm/pg-core/columns";
import { pgTable } from "drizzle-orm/pg-core/table";
import { describe, expect, it } from "vitest";
import { createSharedRefinements } from "./index";

describe("createSharedRefinements", () => {
  const mockTable = pgTable("users", {
    id: uuid().defaultRandom().primaryKey(),
    name: varchar().notNull(),
    email: varchar().notNull().unique(),
    password: varchar({ length: 72 }).notNull(),
    createdAt: timestamp({ withTimezone: true, precision: 3 }).default(sql`CURRENT_TIMESTAMP`).notNull(),
    updatedAt: timestamp({ withTimezone: true, precision: 3 }).default(sql`CURRENT_TIMESTAMP`).notNull(),
  }, table => [
    index().on(table.createdAt),
  ]);

  it("should be a function", () => {
    expect(typeof createSharedRefinements).toBe("function");
  });

  it("should return the second parameter", () => {
    const refinements = {};
    const output = createSharedRefinements(mockTable, refinements);
    expect(output).toBe(refinements);
  });
});
