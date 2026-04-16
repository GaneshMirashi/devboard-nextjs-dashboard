import BaseLayout from "@/app/components/layout/BaseLayout";
import Insights from "./Insights";
import ChartsSection from "./ChartsSection";
import StatsCards from "./StatsCards";

export default function AnalyticsPage() {
  return (
    <BaseLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-semibold">Analytics</h1>

        <StatsCards />
        <ChartsSection />
        <Insights />
      </div>
    </BaseLayout>
  );
}