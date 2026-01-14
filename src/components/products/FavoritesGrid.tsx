"use client";

import { Product } from "@/lib/types";
import { useFavorites } from "@/context/FavoritesContext";
import ProductCard from "./ProductCard";
import Link from "next/link";

export default function FavoritesGrid({ products }: { products: Product[] }) {
  const { favorites } = useFavorites();

  const favoriteProducts = products.filter((product) =>
    favorites.includes(product.id)
  );

  if (favoriteProducts.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">No Favorites Yet</h2>
        <p className="text-gray-500 mb-8">
          Start exploring and save items to your wishlist!
        </p>
        <Link
          href="/"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {favoriteProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}