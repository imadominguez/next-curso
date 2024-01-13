import { WidgetItem } from "@/components";
import { getServerSession } from "next-auth";
import { autOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

async function DashboardPage() {
  const session = await getServerSession(autOptions);

  if (!session) {
    redirect("/api/auth/signin");
  }
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <WidgetItem title="Usuario conectado">
        <span>{session.user?.name}</span>
        <span>{session.user?.image}</span>
        <span>{session.user?.email}</span>

        {JSON.stringify(session, null, 2)}
      </WidgetItem>
    </div>
  );
}

export default DashboardPage;
