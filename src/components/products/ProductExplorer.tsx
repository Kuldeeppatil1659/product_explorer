"use client";

import { useState, useMemo } from "react";
import { Product, Category } from "@/lib/types";
import { useFavorites } from "@/context/FavoritesContext";
import ProductCard from "./ProductCard";

interface Props {
  initialProducts: Product[];
  categories: Category[];
}

export default function ProductExplorer({
  initialProducts,
  categories,
}: Props) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  const { isFavorite } = useFavorites();

  // Filter logic
  const filteredProducts = useMemo(() => {
    return initialProducts.filter((product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;
      const matchesFavorite = showFavoritesOnly ? isFavorite(product.id) : true;

      return matchesSearch && matchesCategory && matchesFavorite;
    });
  }, [
    search,
    selectedCategory,
    showFavoritesOnly,
    initialProducts,
    isFavorite,
  ]);

  return (
    <div>
      {/* Controls Header */}
      <div className="flex flex-col md:flex-row gap-4 mb-8 bg-white p-4 rounded-lg shadow-sm border">
        <input
          type="text"
          placeholder="Search products..."
          className="border p-2 rounded flex-grow"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p-2 rounded capitalize"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <button
          onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
          className={`px-4 py-2 rounded border ${
            showFavoritesOnly
              ? "bg-red-50 text-red-600 border-red-200"
              : "bg-gray-50"
          }`}
        >
          {showFavoritesOnly ? "♥ Favorites" : "♡ Favorites"}
        </button>
      </div>

      {/* Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          No products found.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
