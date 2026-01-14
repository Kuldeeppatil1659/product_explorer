"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/lib/types';
import { useFavorites } from '@/context/FavoritesContext';

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(product.id);

  return (
    <Link 
      href={`/products/${product.id}`} 
      className="group flex flex-col bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
    >
      {/* Image Area with Zoom Effect */}
      <div className="relative h-64 w-full bg-white p-8 flex items-center justify-center overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain group-hover:scale-110 transition-transform duration-500 ease-in-out"
        />
        
        {/* Absolute Positioned Favorite Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleFavorite(product.id);
          }}
          className={`absolute top-4 right-4 p-2 rounded-full shadow-md transition-all duration-300 transform hover:scale-110 ${
            favorite 
              ? "bg-red-50 text-red-500" 
              : "bg-white text-gray-400 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill={favorite ? "currentColor" : "none"} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
        </button>
      </div>

      {/* Content Area */}
      <div className="p-5 flex flex-col flex-grow bg-gray-50/50">
        <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
          {product.category}
        </div>
        
        <h3 className="font-semibold text-gray-800 leading-snug line-clamp-2 mb-4 group-hover:text-blue-600 transition-colors">
          {product.title}
        </h3>
        
        <div className="mt-auto flex items-center justify-between">
          <span className="text-xl font-bold text-slate-900">
            ${product.price.toFixed(2)}
          </span>
          
          <div className="flex items-center gap-1 text-sm text-gray-500 font-medium">
            <span className="text-yellow-400">★</span>
            {product.rating.rate} <span className="text-xs text-gray-400">({product.rating.count})</span>
          </div>
        </div>
      </div>
    </Link>
  );
}