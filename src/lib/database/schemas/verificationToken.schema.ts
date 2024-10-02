import { sql } from "drizzle-orm";
import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";
import { v7 as uuid } from "uuid";
import { users } from "./users.schema";

export const verificationTokens = sqliteTable("verification_tokens", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => uuid()),
  token: text("token").notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id),
  used: integer("used", { mode: "boolean" }).notNull().default(false),
  identifier: text("identifier").notNull(),
  expires: integer("expires", { mode: "timestamp" }).notNull(),
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .default(sql`(strftime('%s', 'now'))`),
  updatedAt: integer("updated_at", { mode: "timestamp" })
    .notNull()
    .default(sql`(strftime('%s', 'now'))`)
    .$onUpdateFn(() => sql`(strftime('%s', 'now'))`),
});
