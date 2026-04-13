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

const COLORS = ["#22c55e", "#ef4444"]; // green, red

export default function ChartsSection() {
  const { last7Days, pieData } = useAnalytics();

  return (
    <div className="grid md:grid-cols-2 gap-6 pt-4">

      {/* 🔥 Area Chart */}
      <div className="h-64 rounded-2xl border p-4 bg-[#020617]">
        <h3 className="text-sm text-gray-400 mb-2">
          Weekly Productivity
        </h3>

        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={last7Days}>
            <defs>
              <linearGradient id="colorTasks" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />

            <XAxis dataKey="date" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />

            <Tooltip
              contentStyle={{
                backgroundColor: "#020617",
                border: "1px solid #1f2937",
                borderRadius: "10px",
              }}
            />

            <Area
              type="monotone"
              dataKey="count"
              stroke="#6366f1"
              fillOpacity={1}
              fill="url(#colorTasks)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* 🔥 Donut Pie Chart */}
      <div className="h-64 rounded-2xl border p-4 bg-[#020617] flex flex-col">
        <h3 className="text-sm text-gray-400 mb-2">
          Task Distribution
        </h3>

        <div className="flex-1 flex items-center justify-center">
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
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-4 text-sm mt-2">
          <div className="flex items-center gap-1 text-green-400">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Completed
          </div>
          <div className="flex items-center gap-1 text-red-400">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            Pending
          </div>
        </div>
      </div>
    </div>
  );
}