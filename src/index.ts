import type { InferInsertModel, Table } from "drizzle-orm/table";
import type { BuildRefine } from "drizzle-orm/zod";

export function createSharedRefinements<
  T extends Table,
  ValidKeys extends keyof InferInsertModel<T>,
  R extends BuildRefine<Pick<T["_"]["columns"], ValidKeys>, undefined>,
>(
  table: T,
  refinements: { [K in keyof R]: K extends ValidKeys ? R[K] : never },
): R {
  return refinements;
}
