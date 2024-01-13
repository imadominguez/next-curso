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
  const cart = JSON.parse(cookiesStire.get("cart")?.value || "{}") as {
    [id: string]: number;
  };
  const productsInCart = getProductsInCart(cart);

  const totaltoPay = productsInCart.reduce(
    (prev, current) => current.product.price * current.quantity + prev,
    0,
  );
  return (
    <div className="p-2">
      <h1 className="my-3 text-4xl font-semibold">
        Productos en el carrito de compras
      </h1>

      <hr className="mb-2" />

      <div className="flex w-full flex-col gap-2 sm:flex-row">
        <div className="flex h-auto w-full flex-col items-center justify-center gap-2 space-y-6 rounded-xl border border-gray-200 bg-white px-6 py-8 sm:w-8/12">
          {/* Productos */}

          {productsInCart.length > 0 ? (
            productsInCart.map(({ product, quantity }) => (
              <ItemCard
                key={product.id}
                product={product}
                quantity={quantity}
              />
            ))
          ) : (
            <span className="text-xl font-semibold text-gray-700/80">
              No hay productos en el carrito
            </span>
          )}
        </div>

        <div className="flex w-full flex-col sm:w-4/12">
          <WidgetItem title="Carrito final">
            <div className="mt-2 flex justify-center gap-4">
              <h3 className="text-3xl font-bold text-gray-700">
                ${(totaltoPay * 1.15).toFixed(2)}
              </h3>
            </div>

            <span className="text-center font-bold text-gray-500">
              Impuestos 15%: ${(totaltoPay * 0.15).toFixed(2)}
            </span>
          </WidgetItem>
        </div>
      </div>
    </div>
  );
}
