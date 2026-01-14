import { Product, Category } from './types';

const API_URL = 'https://fakestoreapi.com';

async function fetchWithError(endpoint: string) {
  try {
    const res = await fetch(`${API_URL}${endpoint}`, { 
      cache: 'no-store',
      // Add these headers to bypass bot protection
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
        'Accept': 'application/json'
      }
    });

    if (!res.ok) throw new Error(`HTTP Error ${res.status}`);
    
    return await res.json();
  } catch (error) {
    console.error(`Fetch error for ${endpoint}:`, error);
    return []; 
  }
}

export async function getProducts(): Promise<Product[]> {
  const data = await fetchWithError('/products');
  return data;
}

export async function getProduct(id: string): Promise<Product> {
  const data = await fetchWithError(`/products/${id}`);
  if (!data || Object.keys(data).length === 0) throw new Error('Product not found');
  return data;
}

export async function getCategories(): Promise<Category[]> {
  const data = await fetchWithError('/products/categories');
  return data;
}