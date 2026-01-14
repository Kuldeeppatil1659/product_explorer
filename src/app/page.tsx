import ProductExplorer from "@/components/products/ProductExplorer";
import { getProducts, getCategories } from "@/lib/api";

export default async function HomePage() {
  // fetching data in parallel
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories(),
  ]);

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Product Explorer</h1>
      <ProductExplorer initialProducts={products} categories={categories} />
    </main>
  );
}
