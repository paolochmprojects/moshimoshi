import {
  integer,
  primaryKey,
  sqliteTable,
  text,
} from "drizzle-orm/sqlite-core";
import { roles } from "./roles.schema";
import { permissions } from "./permissions.schema";
import { sql } from "drizzle-orm";

export const permissionsRole = sqliteTable(
  "permissions_role",
  {
    roleId: text("role_id")
      .notNull()
      .references(() => roles.id),
    permissionId: text("permission_id")
      .notNull()
      .references(() => permissions.id),
    createdAt: integer("created_at", { mode: "timestamp" })
      .notNull()
      .default(sql`(strftime('%s', 'now'))`),
    updatedAt: integer("updated_at", { mode: "timestamp" })
      .notNull()
      .default(sql`(strftime('%s', 'now'))`)
      .$onUpdateFn(() => sql`(strftime('%s', 'now'))`),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.roleId, table.permissionId] }),
  })
);

export type SelectPermissionRole = typeof permissionsRole.$inferSelect;
export type InsertPermissionRole = typeof permissionsRole.$inferInsert;
