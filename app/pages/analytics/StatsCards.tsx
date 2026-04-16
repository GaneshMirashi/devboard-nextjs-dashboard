"use client";

import { useAnalytics } from "@/app/hooks/useAnalytics";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
        <Card key={item.title}>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {item.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{item.value}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}