import { SimpleWidget } from "@/components";

function MainPage() {
  return (
    <div className="text-black p-2">
      <h1 className="text-3xl">Dashboard</h1>
      <span className="mt-2 text-xl">Informacion general</span>
      <div className="flex flex-wrap p-2 gap-4">
        <SimpleWidget />
      </div>
    </div>
  );
}

export default MainPage;
