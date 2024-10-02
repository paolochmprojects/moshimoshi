import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { v7 as uuid } from "uuid";
import { roles } from "./roles.schema";

export const users = sqliteTable("users", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => uuid()),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  mobile: text("mobile"),
  isAdmin: integer("is_admin", { mode: "boolean" }).notNull().default(false),
  roleId: text("role_id")
    .notNull()
    .references(() => roles.id),
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .default(sql`(strftime('%s', 'now'))`),
  updatedAt: integer("updated_at", { mode: "timestamp" })
    .notNull()
    .default(sql`(strftime('%s', 'now'))`)
    .$onUpdateFn(() => sql`(strftime('%s', 'now'))`),
});

export type SelectUser = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;
