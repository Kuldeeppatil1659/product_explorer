"use client";

import { useFavorites } from "@/context/FavoritesContext";

export default function AddToFavoriteBtn({ productId }: { productId: number }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(productId);

  return (
    <button
      onClick={() => toggleFavorite(productId)}
      className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
        favorite
          ? "bg-red-50 text-red-600 border border-red-200 hover:bg-red-100"
          : "bg-blue-600 text-white hover:bg-blue-700"
      }`}
    >
      {favorite ? (
        <>
          <span>♥</span> Saved to Favorites
        </>
      ) : (
        <>
          <span>♡</span> Add to Favorites
        </>
      )}
    </button>
  );
}
