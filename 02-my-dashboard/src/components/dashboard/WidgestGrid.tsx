"use client";

import { SimpleWidget } from "@/components";
import { useAppSelector } from "@/store";
import { IoCartOutline } from "react-icons/io5";

function WidgestGrid() {
  const isCart = useAppSelector((state) => state.counter.count);

  return (
    <div className="grid gap-4 p-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <SimpleWidget
        href="/dashboard/counter"
        title={isCart.toString()}
        subtitle="Productos agregados"
        label="A simple counter label"
        icon={<IoCartOutline size={34} className="text-blue-500" />}
      />
    </div>
  );
}

export default WidgestGrid;
