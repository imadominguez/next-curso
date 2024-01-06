import { CartCounter } from "@/shopping-cart";

export default function CounterPage() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <span>Productos en el carrito</span>

      <CartCounter value={20} />
    </div>
  );
}
