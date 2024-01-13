import { products } from "@/data/products";
import { ProductCard } from "@/products/components";

export default function ProductPage() {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 justify-items-center gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
