import { WidgetItem } from "@/components";

function DashboardPage() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <WidgetItem
        change="2%"
        subtitle="asdfasd fasdf asf as fas fasdf"
        title="Total Sales"
        value="$2,500"
      />
    </div>
  );
}

export default DashboardPage;
