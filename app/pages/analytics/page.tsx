import BaseLayout from "@/app/components/layout/BaseLayout";
import Insights from "./Insights";
import ChartsSection from "./StatsCards";
import StatsCards from "./StatsCards";

export default function AnalyticsPage() {
  return (
    <BaseLayout>
    <div className="p-6 space-y-6">
      {/* Title */}
      <h1 className="text-2xl font-semibold">Analytics</h1>

      {/* Stats Cards */}
      <StatsCards />

      {/* Charts */}
      <ChartsSection />

      {/* Insights */}
      <Insights />
    </div>
    </BaseLayout>
  );
}