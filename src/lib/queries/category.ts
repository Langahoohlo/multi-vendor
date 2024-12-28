import { db } from "@/db"
import { categories } from "@/db/schema/categories"

export async function getCategories() {
  const data = await db.query.categories.findMany({
    orderBy: (categories, { asc }) => [asc(categories.name)],
  })

  return data
}
