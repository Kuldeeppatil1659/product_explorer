"use client"; 

import { useEffect, useState } from 'react';
import ProductExplorer from '@/components/products/ProductExplorer';
import { Product, Category } from '@/lib/types';
import { getProducts, getCategories } from '@/lib/api';
import Loading from './loading';

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [prodData, catData] = await Promise.all([
          getProducts(),
          getCategories()
        ]);
        
        setProducts(prodData);
        setCategories(catData);
      } catch (err) {
        console.error("Failed to fetch data:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Product Explorer</h1>
      <ProductExplorer initialProducts={products} categories={categories} />
    </main>
  );
}