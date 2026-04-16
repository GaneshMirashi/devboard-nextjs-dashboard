"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { useAnalytics } from "@/app/hooks/useAnalytics";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const COLORS = ["#22c55e", "#ef4444"];

export default function ChartsSection() {
  const { last7Days, pieData } = useAnalytics();

  return (
    <div className="grid md:grid-cols-2 gap-6">

      {/* Area Chart */}
      <Card className="h-80">
        <CardHeader>
          <CardTitle className="text-sm font-medium">
            Weekly Productivity
          </CardTitle>
        </CardHeader>

        <CardContent className="h-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={last7Days}>
              <defs>
                <linearGradient id="colorTasks" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                </linearGradient>
              </defs>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="date" />
              <YAxis />

              <Tooltip />

              <Area
                type="monotone"
                dataKey="count"
                stroke="#6366f1"
                fillOpacity={1}
                fill="url(#colorTasks)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Pie Chart */}
      <Card className="h-80 flex flex-col">
        <CardHeader>
          <CardTitle className="text-sm font-medium">
            Task Distribution
          </CardTitle>
        </CardHeader>

        <CardContent className="flex-1 flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={5}
              >
                {pieData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>

        {/* Legend */}
        <div className="flex justify-center gap-4 pb-4 text-sm">
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Completed
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            Pending
          </div>
        </div>
      </Card>
    </div>
  );
}