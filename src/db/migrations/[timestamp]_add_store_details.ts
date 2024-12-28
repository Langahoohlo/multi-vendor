import { sql } from "drizzle-orm"
import { pgTable, varchar, text, json } from "drizzle-orm/pg-core"
import { stores } from "../schema/stores"
import { migrate } from "drizzle-orm/postgres-js/migrator"

export async function up(db: any) {
  await db.alterTable("stores")
    .add("opening_hours", "jsonb")
    .add("address", "text")
    .add("city", "varchar(100)")
    .add("state", "varchar(100)")
    .add("postal_code", "varchar(20)")
    .add("country", "varchar(2)")
    .add("phone_number", "varchar(20)")
    .add("alternative_phone_number", "varchar(20)")
    .execute()
}

export async function down(db: any) {
  await db.alterTable("stores")
    .dropColumn("opening_hours")
    .dropColumn("address")
    .dropColumn("city")
    .dropColumn("state")
    .dropColumn("postal_code")
    .dropColumn("country")
    .dropColumn("phone_number")
    .dropColumn("alternative_phone_number")
    .execute()
}
