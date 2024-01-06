import { SimpleWidget, WidgestGrid } from "@/components";

export const metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard",
};

function MainPage() {
  return (
    <div className="text-black p-2">
      <h1 className="text-3xl">Dashboard</h1>
      <span className="mt-2 text-xl">Informacion general</span>
      <WidgestGrid />
    </div>
  );
}

export default MainPage;
