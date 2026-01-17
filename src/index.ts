import type { Table } from "drizzle-orm/table";
import type { BuildRefine } from "drizzle-zod";

export function createSharedRefinements<
  T extends Table,
  ValidKeys extends keyof T["$inferInsert"],
  R extends BuildRefine<Pick<T["_"]["columns"], ValidKeys>, undefined>,
>(
  table: T,
  refinements: { [K in keyof R]: K extends ValidKeys ? R[K] : never },
): R {
  return refinements;
}
