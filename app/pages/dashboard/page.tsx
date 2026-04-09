"use client";

import BaseLayout from "@/app/components/layout/BaseLayout";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

interface Task {
  id: number;
  title: string;
  done: boolean;
  createdAt: string;
  createdBy: string;
}

export default function DashboardPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const pathname = usePathname();

  // ✅ Load tasks on navigation
  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) {
      setTasks(JSON.parse(saved));
    } else {
      setTasks([]);
    }
  }, [pathname]);

  const completed = tasks.filter((t) => t.done).length;

  return (
    <BaseLayout>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* Stats */}
      <p className="mb-6 text-gray-400">
        Total: {tasks.length} | Completed: {completed}
      </p>

      {/* Read-only list */}
      <div className="flex flex-col gap-3">
        {tasks.length === 0 ? (
          <p className="text-gray-500">No tasks available</p>
        ) : (
          tasks.map((task) => (
            <div
              key={task.id}
              className="p-3 border bg-[#020617] border-[#1e293b]"
            >
              <p
                className={`${
                  task.done ? "line-through text-gray-500" : ""
                }`}
              >
                {task.title}
              </p>

              <p className="text-xs text-gray-500 mt-2">
                Created by: {task.createdBy}
              </p>

              <p className="text-xs text-gray-500">
                {new Date(task.createdAt).toLocaleString()}
              </p>
            </div>
          ))
        )}
      </div>
    </BaseLayout>
  );
}