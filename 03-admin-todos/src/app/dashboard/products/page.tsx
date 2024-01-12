import { products } from "@/data/products";
import { ProductCard } from "@/products/components";

export default function ProductPage() {
  return (
    <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 gap-3">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
