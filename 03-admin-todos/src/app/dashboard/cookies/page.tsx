import { TabBar } from "@/components";
import { Metadata } from "next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Cookies Page",
  description: "Cookies",
  keywords: "cookies",
};

export default function CookiesPage() {
  const cookieStore = cookies();
  const cookieTab = +(cookieStore.get("selected-tab")?.value ?? "1");
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold">Cookies</h1>
        <TabBar currentTab={cookieTab} />
      </div>
    </div>
  );
}
