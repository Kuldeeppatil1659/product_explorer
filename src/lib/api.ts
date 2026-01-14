import { Product, Category } from "./types";

const API_URL = "https://fakestoreapi.com";

export async function getProducts(): Promise<Product[]> {
  const res = await fetch(`${API_URL}/products`);
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export async function getProduct(id: string): Promise<Product> {
  const res = await fetch(`${API_URL}/products/${id}`);

  if (!res.ok) throw new Error(`Failed to fetch product: ${res.status}`);
  const text = await res.text();
  if (!text) throw new Error("Product not found (empty response)");

  return JSON.parse(text);
}

export async function getCategories(): Promise<Category[]> {
  const res = await fetch(`${API_URL}/products/categories`);
  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json();
}
