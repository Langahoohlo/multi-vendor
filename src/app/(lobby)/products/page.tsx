import { type Metadata } from "next"
import { env } from "@/env.js"

import { getAllProducts } from "@/lib/queries/product"
import { AlertCard } from "@/components/alert-card"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { Shell } from "@/components/shell"
import { ProductCard } from "@/components/product-card"

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: "Products",
  description: "Buy products from our stores",
}

export default async function ProductsPage() {
  const products = await getAllProducts()

  return (
    <Shell>
      <PageHeader>
        <PageHeaderHeading size="sm">Products</PageHeaderHeading>
        <PageHeaderDescription size="sm">
          Buy products from our stores
        </PageHeaderDescription>
      </PageHeader>
      <AlertCard />
      
      {products.length ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="mx-auto flex max-w-xs flex-col space-y-1 text-center">
          <h3 className="text-lg font-medium">No products found</h3>
          <p className="text-sm text-muted-foreground">
            Check back later for new products
          </p>
        </div>
      )}
    </Shell>
  )
}
