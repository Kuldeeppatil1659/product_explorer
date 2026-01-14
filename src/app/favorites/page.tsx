export const dynamic = "force-dynamic";
export const revalidate = 0;

import { getProducts } from "@/lib/api";
import FavoritesGrid from "@/components/products/FavoritesGrid";

export const metadata = {
  title: 'My Favorites | StoreApp',
};

export default async function FavoritesPage() {
  const products = await getProducts();

  return (
    <main className="container mx-auto p-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Favorites</h1>
      <FavoritesGrid products={products} />
    </main>
  );
}
