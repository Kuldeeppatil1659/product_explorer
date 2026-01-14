import { getProduct } from "@/lib/api";
import AddToFavoriteBtn from "@/components/products/AddToFavoriteBtn";
import Image from "next/image";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;

  const product = await getProduct(id);

  return (
    <div className="container mx-auto p-4 py-10">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="relative h-96 w-full bg-white p-10 rounded-xl border">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="space-y-4">
          <span className="text-sm font-bold text-blue-600 uppercase tracking-wide">
            {product.category}
          </span>
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-gray-600 leading-relaxed">{product.description}</p>
          <div className="text-2xl font-bold text-green-700">
            ${product.price}
          </div>

          <AddToFavoriteBtn productId={product.id} />
        </div>
      </div>
    </div>
  );
}
