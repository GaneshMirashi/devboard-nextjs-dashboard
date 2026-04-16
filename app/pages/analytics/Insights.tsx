"use client";

import { useAnalytics } from "@/app/hooks/useAnalytics";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Insights() {
  const { todayCompleted, productivity } = useAnalytics();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Insights</CardTitle>
      </CardHeader>

      <CardContent>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>🔥 You completed {todayCompleted} tasks today</li>
          <li>📈 Your productivity is {productivity}%</li>
          <li>⚡ Keep pushing, you are doing great!</li>
        </ul>
      </CardContent>
    </Card>
  );
}