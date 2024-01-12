import { WidgetItem } from "@/components";
import { Product, products } from "@/data/products";
import { ItemCard } from "@/shopping-cart";
import { Metadata } from "next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Carrito de compras",
  description: "Productos en el carrito de compras",
};

interface ProductInCard {
  product: Product;
  quantity: number;
}

const getProductsInCart = (cart: { [id: string]: number }) => {
  const productsInCart: ProductInCard[] = [];

  for (const id of Object.keys(cart)) {
    const product = products.find((product) => product.id === id);
    if (product) {
      productsInCart.push({ product, quantity: cart[id] });
    }
  }
  return productsInCart;
};

export default function CartPage() {
  const cookiesStire = cookies();
  const cart = JSON.parse(cookiesStire.get("cart")?.value || "{}") as { [id: string]: number };
  const productsInCart = getProductsInCart(cart);

  const totaltoPay = productsInCart.reduce(
    (prev, current) => current.product.price * current.quantity + prev,
    0
  );
  return (
    <div className="p-2">
      <h1 className="text-4xl font-semibold my-3">Productos en el carrito de compras</h1>

      <hr className="mb-2" />

      <div className="flex flex-col sm:flex-row gap-2 w-full">
        <div className="flex flex-col gap-2 w-full sm:w-8/12">
          {/* Productos */}

          {productsInCart.map(({ product, quantity }) => (
            <ItemCard key={product.id} product={product} quantity={quantity} />
          ))}
        </div>

        <div className="flex flex-col w-full sm:w-4/12">
          <WidgetItem title="Carrito final">
            <div className="flex justify-center gap-4 mt-2">
              <h3 className="text-3xl font-bold text-gray-700">
                ${(totaltoPay * 1.15).toFixed(2)}
              </h3>
            </div>

            <span className="font-bold text-center text-gray-500">
              Impuestos 15%: ${(totaltoPay * 0.15).toFixed(2)}
            </span>
          </WidgetItem>
        </div>
      </div>
    </div>
  );
}
