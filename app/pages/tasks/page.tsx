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

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("tasks");
      if (saved) {
        return JSON.parse(saved);
      }
    }
    return [];
  });
  const [value, setValue] = useState("");
  const pathname = usePathname();

  // ✅ Save tasks
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // ➕ Add
  const addTask = () => {
    if (!value.trim()) return;

    const newTask: Task = {
      id: Date.now(),
      title: value,
      done: false,
      createdAt: new Date().toISOString(),
      createdBy: "Ganesh",
    };

    setTasks((prev) => [...prev, newTask]);
    setValue("");

    alert("✅ Task created");
  };

  // 🔁 Toggle
  const toggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, done: !t.done } : t
      )
    );
  };

  // ❌ Delete
  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
    alert("🗑️ Deleted");
  };

  // ✏️ Edit
  const editTask = (id: number) => {
    const newTitle = prompt("Edit task");
    if (!newTitle) return;

    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, title: newTitle } : t
      )
    );

    alert("✏️ Updated");
  };

  return (
    <BaseLayout>
      <h1 className="text-3xl font-bold mb-6">Tasks</h1>

      {/* Add */}
      <div className="flex gap-3 mb-6">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="flex-1 px-4 py-2 bg-[#020617] border border-[#1e293b]"
          placeholder="Enter task..."
        />
        <button onClick={addTask} className="bg-blue-600 px-4 py-2">
          Add
        </button>
      </div>

      {/* List */}
      <div className="flex flex-col gap-3">
        {tasks.length === 0 ? (
          <p className="text-gray-500">No tasks</p>
        ) : (
          tasks.map((task) => (
            <div
              key={task.id}
              className="p-3 border bg-[#020617] border-[#1e293b]"
            >
              <div className="flex justify-between">
                <p
                  onClick={() => toggleTask(task.id)}
                  className={`cursor-pointer ${
                    task.done ? "line-through text-gray-500" : ""
                  }`}
                >
                  {task.title}
                </p>

                <div className="flex gap-2">
                  <button
                    onClick={() => editTask(task.id)}
                    className="text-yellow-400"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteTask(task.id)}
                    className="text-red-400"
                  >
                    Delete
                  </button>
                </div>
              </div>

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