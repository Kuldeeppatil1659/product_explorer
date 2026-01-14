"use client";

import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/types";
import { useFavorites } from "@/context/FavoritesContext";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(product.id);

  return (
    <Link
      href={`/products/${product.id}`}
      className="group block bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative h-64 w-full bg-white p-6 flex items-center justify-center">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.preventDefault(); 
            toggleFavorite(product.id);
          }}
          className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-sm hover:bg-gray-100 transition-colors z-10"
          aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
        >
          {favorite ? (
            <span className="text-xl text-red-500">♥</span>
          ) : (
            <span className="text-xl text-gray-400">♡</span>
          )}
        </button>
      </div>

      <div className="p-4 border-t border-gray-100">
        <div className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-1">
          {product.category}
        </div>
        <h3
          className="font-medium text-gray-900 truncate mb-2"
          title={product.title}
        >
          {product.title}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          <span className="text-sm text-gray-500 flex items-center gap-1">
            ★ {product.rating.rate}
          </span>
        </div>
      </div>
    </Link>
  );
}
