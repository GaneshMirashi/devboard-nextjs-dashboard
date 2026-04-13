"use client";

import { useAnalytics } from "@/app/hooks/useAnalytics";

export default function StatsCards() {
  const {
    totalTasks,
    completedTasks,
    pendingTasks,
    productivity,
  } = useAnalytics();

  const stats = [
    { title: "Total Tasks", value: totalTasks },
    { title: "Completed", value: completedTasks },
    { title: "Pending", value: pendingTasks },
    { title: "Productivity", value: `${productivity}%` },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((item) => (
        <div
          key={item.title}
          className="p-4 rounded-2xl border bg-[#020617]"
        >
          <p className="text-sm text-gray-400">{item.title}</p>
          <h2 className="text-xl font-semibold mt-2">{item.value}</h2>
        </div>
      ))}
    </div>
  );
}