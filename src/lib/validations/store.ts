import * as z from "zod"

import { slugify } from "@/lib/utils"

export const createStoreSchema = z
  .object({
    name: z.string().min(3).max(50),
    description: z.string().optional().default(""),
    slug: z.string().optional(),
    storeType: z.enum(["Food", "Grocery", "Alcohol", "Health", "Retail"]).default("Retail"),
    cuisineTypes: z.array(z.string()).optional().default([]),
    openingHours: z.record(z.array(z.object({
      open: z.string(),
      close: z.string()
    }))).optional().default({}),
    address: z.string().optional().default(""),
    city: z.string().optional().default(""),
    state: z.string().optional().default(""),
    postalCode: z.string().optional().default(""),
    country: z.string().optional().default(""),
    phoneNumber: z.string().optional().default(""),
    alternativePhoneNumber: z.string().optional().default(""),
  })
  .refine((data) => {
    if (!data.slug) {
      data.slug = slugify(data.name)
    }
    return true
  })

export const getStoreSchema = z.object({
  id: z.number(),
  userId: z.string(),
})

export const getStoresSchema = z.object({
  page: z.coerce.number().default(1),
  per_page: z.coerce.number().default(10),
  sort: z.string().optional().default("productCount.desc"),
  statuses: z.string().optional(),
  categories: z.string().optional(),
  subcategory: z.string().optional(),
  subcategories: z.string().optional(),
  price_range: z.string().optional(),
  store_ids: z.string().optional(),
  store_page: z.coerce.number().default(1),
  active: z.string().optional().default("true"),
  user_id: z.string().optional(),
})

export const updateStoreSchema = z.object({
  name: z.string().min(3).max(50),
  description: z.string().optional(),
  storeType: z.enum(["Food", "Grocery", "Alcohol", "Health", "Retail"]).optional(),
  cuisineTypes: z.array(z.string()).optional(),
  openingHours: z.record(z.array(z.object({
    open: z.string(),
    close: z.string()
  }))).optional(),
  address: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  postalCode: z.string().optional(),
  country: z.string().optional(),
  phoneNumber: z.string().optional(),
  alternativePhoneNumber: z.string().optional(),
})

export type CreateStoreSchema = z.infer<typeof createStoreSchema>
export type GetStoreSchema = z.infer<typeof getStoreSchema>
export type GetStoresSchema = z.infer<typeof getStoresSchema>
export type UpdateStoreSchema = z.infer<typeof updateStoreSchema>
