"use client";

import { useEffect, useState } from "react";

export function useAnalytics() {
  const [tasks, setTasks] = useState<any[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("tasks");
    if (stored) {
      setTasks(JSON.parse(stored));
    }
  }, []);

  const totalTasks = tasks.length;

  // ✅ TRUE = completed
  const completedTasks = tasks.filter(t => t.done === true).length;

  // ✅ FALSE = pending
  const pendingTasks = tasks.filter(t => t.done === false).length;

  const productivity = totalTasks
    ? Math.round((completedTasks / totalTasks) * 100)
    : 0;

  // ✅ Pie Data (NOW CORRECT)
  const pieData = [
    { name: "Completed", value: completedTasks },
    { name: "Pending", value: pendingTasks },
  ];

  // ✅ Last 7 days
  const last7Days = [...Array(7)].map((_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - i);

    const dayStr = date.toISOString().split("T")[0];

    const count = tasks.filter(task =>
      task.done && task.createdAt.startsWith(dayStr)
    ).length;

    return {
      date: date.toLocaleDateString("en-US", { weekday: "short" }),
      count,
    };
  }).reverse();

  // ✅ Today completed
  const today = new Date().toISOString().split("T")[0];

  const todayCompleted = tasks.filter(task =>
    task.done && task.createdAt.startsWith(today)
  ).length;

  return {
    totalTasks,
    completedTasks,
    pendingTasks,
    productivity,
    last7Days,
    todayCompleted,
    pieData,
  };
}