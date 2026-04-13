"use client";

import { useAnalytics } from "@/app/hooks/useAnalytics";

export default function Insights() {
  const { todayCompleted, productivity } = useAnalytics();

  return (
    <div className="p-4 rounded-2xl border bg-[#020617]">
      <h3 className="text-lg font-medium mb-3">Insights</h3>

      <ul className="space-y-2 text-sm text-gray-300">
        <li>🔥 You completed {todayCompleted} tasks today</li>
        <li>📈 Your productivity is {productivity}%</li>
        <li>⚡ Keep pushing, you are doing great!</li>
      </ul>
    </div>
  );
}