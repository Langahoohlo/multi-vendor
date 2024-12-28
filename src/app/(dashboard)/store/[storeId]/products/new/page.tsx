import { type Metadata } from "next"
import { redirect } from "next/navigation"

import { getCategories } from "@/lib/queries/category"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { Shell } from "@/components/shell"
import { CreateProductForm } from "./_components/create-product-form"

export const metadata: Metadata = {
  title: "New Product",
  description: "Add a new product",
}

interface NewProductPageProps {
  params: {
    storeId: string
  }
}

export default async function NewProductPage({ params }: NewProductPageProps) {
  const categories = await getCategories()

  return (
    <Shell>
      <PageHeader>
        <PageHeaderHeading size="sm">New Product</PageHeaderHeading>
        <PageHeaderDescription size="sm">
          Add a new product to your store
        </PageHeaderDescription>
      </PageHeader>
      <CreateProductForm storeId={params.storeId} categories={categories} />
    </Shell>
  )
}
