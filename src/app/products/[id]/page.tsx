"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'; 
import { getProduct } from '@/lib/api';
import { Product } from '@/lib/types';
import AddToFavoriteBtn from '@/components/products/AddToFavoriteBtn';
import Image from 'next/image';
import Link from 'next/link';
import Loading from './loading'; 

export default function ProductPage() {
  const params = useParams();
  const id = params?.id as string; 

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        const data = await getProduct(id);
        setProduct(data);
      } catch (err) {
        console.error("Failed to load product:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (error || !product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">Product Not Found</h2>
        <p className="text-gray-500">Could not retrieve product details.</p>
        <Link href="/" className="text-blue-600 hover:underline">
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center text-sm text-gray-500 mb-8 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="capitalize text-gray-700">{product.category}</span>
          <span className="mx-2">/</span>
          <span className="truncate max-w-[200px] text-gray-400">{product.title}</span>
        </nav>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            
            {/* Left Column: Image Area */}
            <div className="relative h-[50vh] md:h-auto bg-white p-12 flex items-center justify-center border-b md:border-b-0 md:border-r border-gray-100">
              <div className="relative w-full h-full max-h-[500px]">
                <Image 
                  src={product.image} 
                  alt={product.title} 
                  fill 
                  className="object-contain hover:scale-105 transition-transform duration-500" 
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            
            {/* Right Column: Product Info */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white">
              
              {/* Category Badge */}
              <div className="mb-4">
                <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider">
                  {product.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                {product.title}
              </h1>

              {/* Rating & Reviews */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex text-yellow-400 text-lg">
                  {'★'.repeat(Math.round(product.rating.rate))}
                  <span className="text-gray-300">{'★'.repeat(5 - Math.round(product.rating.rate))}</span>
                </div>
                <span className="text-sm text-gray-500 font-medium border-l pl-4 border-gray-200">
                  {product.rating.count} Verified Reviews
                </span>
                <span className="text-sm text-green-600 font-medium bg-green-50 px-2 py-0.5 rounded">
                  In Stock
                </span>
              </div>

              {/* Price */}
              <div className="text-4xl font-bold text-slate-900 mb-8 flex items-baseline gap-2">
                ${product.price.toFixed(2)}
                <span className="text-lg text-gray-400 font-normal line-through">
                  ${(product.price * 1.2).toFixed(2)}
                </span>
              </div>

              {/* Description */}
              <div className="prose prose-sm text-gray-600 mb-10 leading-relaxed">
                <p>{product.description}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <button className="flex-1 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200 active:scale-95">
                  Buy Now
                </button>
                <div className="flex-1">
                  <AddToFavoriteBtn productId={product.id} />
                </div>
              </div>
              
              {/* Trust Badges */}
              <div className="mt-8 pt-8 border-t border-gray-100 grid grid-cols-2 gap-4 text-xs text-gray-500">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Free Shipping</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>Secure Payment</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}