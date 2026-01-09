import type { Table } from "drizzle-orm/table";
import type { BuildRefine } from "drizzle-zod";

export function createSharedRefinements<
  T extends Table,
  R extends BuildRefine<Pick<T["_"]["columns"], keyof T["$inferInsert"]>, undefined>,
>(table: T, refinements: R): R {
  return refinements;
}
