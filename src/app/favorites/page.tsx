"use client";

import { useEffect, useState } from "react";
import FavoritesGrid from "@/components/products/FavoritesGrid";
import { Product } from "@/lib/types";
import { getProducts } from "@/lib/api"; 
import Loading from "../loading";

export default function FavoritesPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await getProducts(); 
        setProducts(data);
      } catch (error) {
        console.error("Failed to load favorites data", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main className="container mx-auto p-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Favorites</h1>
      <FavoritesGrid products={products} />
    </main>
  );
}