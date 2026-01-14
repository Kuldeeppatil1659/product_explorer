export const dynamic = "force-dynamic";
export const revalidate = 0; 

import ProductExplorer from "@/components/products/ProductExplorer";
import { getProducts, getCategories } from "@/lib/api";
import { Category, Product } from "@/lib/types";

export default async function HomePage() {
  let products: Product[] = [];
  let categories: Category[] = [];

  try {
    [products, categories] = await Promise.all([
      getProducts(),
      getCategories(),
    ]);
  } catch (err) {
    console.error("API fetch error:", err);
  }

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Product Explorer</h1>
      <ProductExplorer initialProducts={products} categories={categories} />
    </main>
  );
}
